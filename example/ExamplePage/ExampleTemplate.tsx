import { m } from 'pyrite';
import { Prism } from 'pyrite-prism'
import { ExampleController } from './ExampleController';

export function ExampleTemplate(this: ExampleController) {
    return (
        <div>
            <h1>Pyrite redux example</h1>

            <div>
                <p><b>It show the time with this {this.delay} when the button is clicked</b></p>
                <button 
                    onclick={(event: any)=> this.store.dispatch(this.actions.getTime(this.delay))}> Click
                </button><br/>
                <div> 
                    <span>Time: {this.time ? this.time.toString(): ''}</span><br/>
                    <span>Frozen: {this.frozen}</span>
                </div>
            </div>

        </div>
    )
}