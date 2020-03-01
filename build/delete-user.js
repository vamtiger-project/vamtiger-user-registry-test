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
const types_1 = require("./types");
const close_confirmation_1 = require("./close-confirmation");
function default_1({ element }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { params, deleteUserElement: userElement } = element;
        const { deleteUserUrl } = params;
        const user = userElement && element.user.get(userElement);
        const url = (user === null || user === void 0 ? void 0 : user.id) && `${deleteUserUrl}/${user.id}`;
        const requestParams = {
            method: types_1.RequestMethod.DELETE
        };
        let response;
        if (url) {
            try {
                response = yield fetch(url, requestParams)
                    .then(response => response.json());
                if (response.result === 'successful' && userElement) {
                    element.deleteUserElement = undefined;
                    element.user.delete(userElement);
                    (_a = userElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(userElement);
                    close_confirmation_1.default({ element });
                }
            }
            catch (error) {
                console.error('Delete Usesr error');
                console.error(error);
            }
        }
    });
}
exports.default = default_1;
function confirm({ element, userElement }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        dataset.confirm = 'Delete user';
        overlayDataset.confirm = dataset.confirm;
        element.deleteUserElement = userElement;
    }
}
exports.confirm = confirm;
//# sourceMappingURL=delete-user.js.map