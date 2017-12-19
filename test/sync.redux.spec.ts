require('jsdom-global')();

import { m } from "pyrite";
import { expect } from "chai";

import { testRedux } from "./sync.redux.mocks";

describe('Sync Redux', () => {
    before(()=> {
        m.render(document.body, testRedux);
    })
    it('should create a component correctly', () => {
        expect((document.body as any).vnodes[0].state.loaded).to.be.true;
    });
    it('should get the name from the input value', () => {
        const button = (document.body as any).vnodes[0].dom.querySelector("button");
        button.onclick("Paco");
        expect((document.body as any).vnodes[0].state.name).to.be.equal("Paco");
    })
});