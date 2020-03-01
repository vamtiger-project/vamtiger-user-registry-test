"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
exports.default = () => describe('vamtiger-user-registry', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadScript({
                src: 'vamtiger-user-registry.js'
            });
        });
    });
    it('load script', function () {
        const script = document.head.querySelector('[src="vamtiger-user-registry.js"]');
        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
    });
});
//# sourceMappingURL=load-script.js.map