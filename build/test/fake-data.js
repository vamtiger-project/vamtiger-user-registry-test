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
const faker = require("faker");
const browser_1 = require("./browser");
const handle_user_1 = require("../handle-user");
exports.default = () => describe('Test Mode', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const element = yield browser_1.getElement();
        const numberOfRecords = 100;
        it(`Fake Data: ${numberOfRecords} records`, function () {
            return __awaiter(this, void 0, void 0, function* () {
                const users = new Array(numberOfRecords)
                    .fill(undefined)
                    .map((entry, index) => ({
                    id: index,
                    name: faker.name.firstName(),
                    surname: faker.name.lastName(),
                    email: faker.internet.email(),
                    position: faker.name.jobTitle()
                }));
                element && users.map(user => handle_user_1.default({ element, user }));
            });
        });
    });
});
//# sourceMappingURL=fake-data.js.map