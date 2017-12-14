import {Component, Template, m} from 'pyrite';
import {Redux, Store} from '../../src/index';
import {ExampleTemplate} from './ExampleTemplate';
import {reducers, middlewares, getTime} from './helpers'

@Template(ExampleTemplate)
@Redux(reducers, middlewares)
export class ExampleController extends Component<any> {
    delay: number = 500;
    time: string;
    frozen: boolean= false;
    store: Store<{}>
    getTime = getTime;

    $onCreate() {
        this.store.subscribe(()=>{
            const state: any = this.store.getState();
            if(state.time) this.time = state.time.time;
            this.frozen = state.time.frozen;
            m.redraw();
        })
    }
}