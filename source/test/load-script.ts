import { expect } from 'chai';
import {getElement} from './browser';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-user-registry', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-user-registry.js'
        });
    });

    it('load script', function() {
        const script = document.head.querySelector('[src="vamtiger-user-registry.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});