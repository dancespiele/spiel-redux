import {Component} from 'pyrite';
import {actionKeys} from './ReduxTypes';
import { Store } from 'redux';

export abstract class ReduxComponent<Attributes> extends Component<Attributes>{
    actions: {[K in actionKeys]: Function};
    store: Store<{}>
}