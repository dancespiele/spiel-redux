import { m } from 'pyrite';
import { createStore, combineReducers, ReducersMapObject, Store, Middleware, applyMiddleware, Action } from 'redux';

export function Redux<T extends {new(...args:any[]):{}}>(
    constructor:T,
    reducers: ReducersMapObject,
    actions: Object) {
    return class extends constructor {
        actions = actions;
        store = addReducers(reducers);
    }
}

export function AsyncRedux<T extends {new(...args:any[]):{}}>(
    constructor:T,
    reducers: ReducersMapObject,
    middlewares: Array<Middleware>,
    actions: Object) {
    return class extends constructor {
        actions = actions;
        store = addAsyncReducers(reducers, middlewares);
    }
}

const addReducers = (reducers: ReducersMapObject) => {
    const reduce = combineReducers(reducers);
    return createStore(reduce);
}

const addAsyncReducers = (reducers: ReducersMapObject, middlewares: Array<Middleware>) => {
    const finalCreateStore = applyMiddleware(...middlewares)(createStore);
    const reduce = combineReducers(reducers);
    return finalCreateStore(reduce);
}