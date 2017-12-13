import {Component, Template} from 'pyrite';
import {Redux, ReduxComponent} from '../../src/index';
import {ExampleTemplate} from './ExampleTemplate';
import {reducers, actions, middlewares} from './helpers'

@Template(ExampleTemplate)
@Redux(reducers, actions, middlewares)
export class ExampleController extends ReduxComponent<any> {
    delay: number = 500;
    time: string;
    frozen: boolean;

    $onCreate() {
        this.store.subscribe(()=>{
            const state: any = this.store.getState();
            if(state.time) this.time = state.time.time;
            this.frozen = state.time.frozen;
            console.log(this.time)
        })
    }
}