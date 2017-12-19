import {m, Template, Component } from 'pyrite';
import {Redux, Store} from '../src';
import {middlewares, getName, reducersName} from './helpers'

@Redux(reducersName)
@Template(function(this: TestRedux){
    return(
        <div>
            <button onclick={(name: string)=> this.store.dispatch(this.getName(name))}></button>
            <span>{this.name}</span>
        </div>
    )
})
class TestRedux extends Component<any>{
    loaded: boolean;
    store: Store<{}>;
    name: string;
    getName = getName;

    $onCreate() {
        this.loaded = true;
        this.store.subscribe(()=> {
            const state: any = this.store.getState();
            this.name = state.name.value;
        })
    }
}

export const testRedux: any = (
    <TestRedux></TestRedux>
);