import { m } from 'pyrite';
import { createStore, combineReducers, ReducersMapObject, Store, Middleware, applyMiddleware, Action } from 'redux';

export function Redux(
    reducers: ReducersMapObject,
    middlewares?: Array<Middleware>) {
        return <T extends {new(...args:any[]):{}}>(
            constructor: T) => {
                return class extends constructor {
                    store = addReducers(reducers, middlewares);
            }
    }
}

const addReducers = (reducers: ReducersMapObject, middlewares: Array<Middleware> | null = null) => {
    let store: Store<{}>
    const reduce = combineReducers(reducers);
    
    checkRedux();

    if(middlewares && middlewares.length) {
        const finalCreateStore = applyMiddleware(...middlewares)(createStore);
        store = finalCreateStore(reduce);
    } else {
        store = createStore(reduce);
    }
    return store
}

const checkRedux = () => {
    let element = document.getElementById('redux');
    let body;
    
    if(element) {
        body = document.body;
        while( body.hasChildNodes()){
            body.removeChild(body.lastChild);
        }
        element = document.createElement("h1");
        element.innerText = "It is not possible 2 stores in Redux";
        element.setAttribute("style","color: red;")
        document.body.appendChild(element);
        throw new Error('It is not possible 2 stores in Redux');
    } else {
       element = document.createElement("div");
       element.setAttribute("id", "redux");
       document.body.appendChild(element);
    }
}