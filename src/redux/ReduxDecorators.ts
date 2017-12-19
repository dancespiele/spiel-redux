import { m } from 'pyrite';
import { createStore, combineReducers, ReducersMapObject, Store, Middleware, applyMiddleware, compose } from 'redux';

export function Redux(
    reducers: ReducersMapObject,
    middlewares?: Array<Middleware>,
    composeFunctions?: Array<Function>) {
        return <T extends {new(...args:any[]):{}}>(
            constructor: T) => {
                return class extends constructor {
                    store = addReducers(reducers, middlewares, composeFunctions);
            }
    }
}

const addReducers = (reducers: ReducersMapObject, 
    middlewares: Array<Middleware> = null,
    composeFunctions: Array<Function> = null) => {
    let store: Store<{}>
    const reduce = combineReducers(reducers);

    if(middlewares && middlewares.length) {
        const finalCreateStore = applyMiddleware(...middlewares)(createStore);
        store = finalCreateStore(reduce);
    } else {
        store = (composeFunctions && composeFunctions.length) 
            ? createStore(reduce, compose(...composeFunctions)) 
            : createStore(reduce);
    }
    return store;
}