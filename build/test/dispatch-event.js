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
const faker = require("faker");
const types_1 = require("../types");
const element_1 = require("../element");
const browser_1 = require("./browser");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
exports.default = () => describe('dispatch custom events', function () {
    const element = document.body.querySelector(element_1.name);
    const user = {
        id: 0,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        position: faker.name.jobTitle()
    };
    describe(`${types_1.EventName.connected}`, function () {
        it('element added to DOM ', function () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const element = yield browser_1.getElement(true);
                element === null || element === void 0 ? void 0 : element.addEventListener(types_1.EventName.connected, () => {
                    var _a;
                    chai_1.expect(element.parentElement).to.equal(document.body);
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                    browser_1.removeUsers({ element });
                    resolve();
                });
                element && document.body.appendChild(element);
            }));
        });
    });
    describe(`${types_1.EventName.userAdded}`, function () {
        it('user element added to DOM ', function () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const element = yield browser_1.getElement(true);
                ;
                element === null || element === void 0 ? void 0 : element.addEventListener(types_1.EventName.userAdded, ({ detail }) => {
                    var _a;
                    chai_1.expect(detail === null || detail === void 0 ? void 0 : detail.user).to.eq(user);
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                    browser_1.removeUsers({ element });
                    resolve();
                });
                element === null || element === void 0 ? void 0 : element.addEventListener(types_1.EventName.connected, () => {
                    element.dispatchEvent(new CustomEvent(types_1.EventName.addUser, {
                        detail: { user }
                    }));
                });
                element && document.body.appendChild(element);
            }));
        });
    });
});
//# sourceMappingURL=dispatch-event.js.map