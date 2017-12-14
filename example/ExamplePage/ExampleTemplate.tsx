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
                    onclick={(event: any)=> this.store.dispatch(this.getTime(this.delay) as any)}> Click
                </button><br/>
                {(this.time || this.frozen) ? 
                    <div> 
                        <span>Time: {this.time ? this.time.toString(): ''}</span><br/>
                        <span>Frozen: {this.frozen.toString()}</span>
                    </div> :
                    <span>It isn't running yet</span>
                }
            </div>

        </div>
    )
}