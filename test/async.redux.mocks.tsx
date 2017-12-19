import {m, Template, Component } from 'pyrite';
import {Redux, Store} from '../src';
import {middlewares, getTime, reducersTime} from './helpers'

@Redux(reducersTime, middlewares)
@Template(function(this: TestAsyncRedux) {
    return(
        <div>
            <button 
                onclick={(event: any)=> this.store.dispatch(this.getTime(this.delay) as any)}> Click
            </button><br/>
            {(this.time || this.frozen) ? 
                <div> 
                    <span id='time'>Time: {this.time ? this.time.toString(): ''}</span><br/>
                    <span>Frozen: {this.frozen.toString()}</span>
                </div> :
                <span>It isn't running yet</span>
            }
        </div>
    );
})
class TestAsyncRedux extends Component<any>{
    loaded: boolean;
    time: string;
    frozen: boolean;
    delay: number;
    store: Store<{}>
    getTime = getTime;

    $onCreate() {
        this.loaded = true;
        this.store.subscribe(()=>{
            const state: any = this.store.getState();
            if(state.time) this.time = state.time.time;
            this.frozen = state.time.frozen;
        })
    }
}

export const testAsyncRedux: any = (
    <TestAsyncRedux></TestAsyncRedux>
);


