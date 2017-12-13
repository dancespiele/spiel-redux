import { m } from 'pyrite';
import { createStore, combineReducers, ReducersMapObject, Store, Middleware, applyMiddleware, Action } from 'redux';
import {actionKeys} from './ReduxTypes';

export function Redux(
    reducers: ReducersMapObject,
    actions: {[K in actionKeys]: Function},
    middlewares?: Array<Middleware>) {
        return <T extends {new(...args:any[]):{}}>(
            constructor: T) => {
                return class extends constructor {
                    actions = actions;
                    store = addReducers(reducers, middlewares);
            }
    }
}

const addReducers = (reducers: ReducersMapObject, middlewares: Array<Middleware> | null = null) => {
    let store: Store<{}>
    const reduce = combineReducers(reducers);
    if(middlewares && middlewares.length) {
        const finalCreateStore = applyMiddleware(...middlewares)(createStore);
        store = finalCreateStore(reduce);
    } else {
        store = createStore(reduce);
    }
    return store
}