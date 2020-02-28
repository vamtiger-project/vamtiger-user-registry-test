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
const types_1 = require("../types");
const element_1 = require("../element");
exports.default = () => describe('named slots', function () {
    let element;
    before(function () {
        return new Promise(resolve => {
            element = document.createElement(element_1.name);
            element.addEventListener(types_1.EventName.connected, resolve);
            document.body.appendChild(element);
        });
    });
    after(function () {
        var _a;
        (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
    it(types_1.SlotName.headerImage, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${types_1.SlotName.headerImage}"]`;
            chai_1.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(types_1.SlotName.headerCapation, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${types_1.SlotName.headerCapation}"]`;
            chai_1.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(types_1.SlotName.action, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${types_1.SlotName.action}"]`;
            chai_1.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(types_1.SlotName.user, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${types_1.SlotName.user}"]`;
            chai_1.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(types_1.SlotName.footer, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${types_1.SlotName.footer}"]`;
            chai_1.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
});
//# sourceMappingURL=slots.js.map