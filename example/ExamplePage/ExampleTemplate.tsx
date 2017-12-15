import { m } from 'pyrite';
import { Prism } from 'pyrite-prism'
import { ExampleController } from './ExampleController';
import { examples } from './ExamplesCodes'

export function ExampleTemplate(this: ExampleController) {
    return (
        <div>
            <h1>Pyrite Redux example</h1>

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

            <h4>HTML code:</h4>

            <Prism language='jsx' code={examples.exampleHTML}></Prism>

            <h4>JS code:</h4>

            <h5>Reducers</h5>
            <Prism language='typescript' code={examples.exampleReducers}></Prism>

            <h5>Actions</h5>
            <Prism language='typescript' code={examples.exampleActions}></Prism>

            <h5>Middlewares</h5>
            <Prism language='typescript' code={examples.exampleMiddlewares}></Prism>

            <h5>Controler</h5>
            <Prism language='typescript' code={examples.exampleCtrl}></Prism>

            <h4>Redux decoration</h4>

            <h5>Arguments</h5>
            
            <ul>
                <li>
                    <span><b>reducers</b>: type ReducersMapObject (Required)</span>
                </li>
                <li>
                    <span><b>middlewares</b>: type Array[Middleware] (Optional - No compatible with compose arg)</span>
                </li>
                <li>
                    <span><b>composeFuncitions</b>: type Array[Function] (Optional- no compatible with middleware arg)</span>
                </li>
            </ul>

            <p><b style="color: red">WARNING:</b> If you write the middleware and compose arguments the compose will be ignored.
            If you want to pass compose it has to look like this.
            </p>

            <Prism language="typescript" code={`
                @Template(ExampleTemplate)
                @Redux(reducers, null, composeFunctions)
                export class ExampleController extends Component<any> {
                }
            `}></Prism>

            <h4>About Redux</h4>

            <p>Read more <a href="https://redux.js.org/docs/introduction/">here</a></p>
            

        </div>
    )
}