import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-user-registry', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-user-registry.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-user-registry.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});