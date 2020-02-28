import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';
import { EventName, SlotName } from '../types';
import VamtigerUserRegistry, { name } from '../element';

export default () => describe('named slots', function () {
    let element: VamtigerUserRegistry | undefined;

    before(function () {return new Promise(resolve => {
        element = document.createElement(name) as VamtigerUserRegistry;

        element.addEventListener(EventName.connected, resolve);

        document.body.appendChild(element);
    })});

    after(function () {
        element?.parentElement?.removeChild(element);
    })

    it(SlotName.headerImage, async function() {
        const selector = `slot[name="${SlotName.headerImage}"]`;

        expect(element?.shadowRoot?.querySelector(selector))
            .to.be.ok;
    });

    it(SlotName.headerCapation, async function() {
        const selector = `slot[name="${SlotName.headerCapation}"]`;

        expect(element?.shadowRoot?.querySelector(selector))
            .to.be.ok;
    });

    it(SlotName.action, async function() {
        const selector = `slot[name="${SlotName.action}"]`;

        expect(element?.shadowRoot?.querySelector(selector))
            .to.be.ok;
    });

    it(SlotName.user, async function() {
        const selector = `slot[name="${SlotName.user}"]`;

        expect(element?.shadowRoot?.querySelector(selector))
            .to.be.ok;
    });
});