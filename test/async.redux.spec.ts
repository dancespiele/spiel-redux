require('jsdom-global')();

import { m } from "pyrite";
import { expect } from "chai";

import { testAsyncRedux } from "./async.redux.mocks";

describe('Async Redux', () => {
    before(()=> {
        m.render(document.body, testAsyncRedux);
    })
    it('should create a component correctly', () => {
        expect((document.body as any).vnodes[0].state.loaded).to.be.true;
    });
    it('should get true in the frozen state', () => {
        const button = (document.body as any).vnodes[0].dom.querySelector("button");
        button.onclick();
        expect((document.body as any).vnodes[0].state.frozen).to.be.true;
    })
    it('should get the time when click in button and false in frozen state', async() => {
        const button = (document.body as any).vnodes[0].dom.querySelector("button");
        await button.onclick();
        expect((document.body as any).vnodes[0].state.frozen).to.be.false;
        expect((document.body as any).vnodes[0].state.time).to.be.a('string');    
    });
});