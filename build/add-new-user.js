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
const get_user_1 = require("./get-user");
function default_1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params } = element;
        const { addNewUserUrl: url } = params;
        const form = element.querySelector(types_1.Selector.addNewUserForm);
        const formData = form && new FormData(form);
        const requestParams = {
            method: types_1.RequestMethod.POST,
            body: formData
        };
        let response;
        if (url) {
            try {
                response = yield fetch(url, requestParams)
                    .then(response => response.json());
                if (response.result === 'successful') {
                    yield get_user_1.default({
                        element,
                        userId: response.data.user
                    });
                    form === null || form === void 0 ? void 0 : form.reset();
                }
                else {
                    handleFailure({ element, response });
                }
            }
            catch (error) {
                console.error('Error Adding New User');
                console.error(error);
            }
        }
    });
}
exports.default = default_1;
function confirm({ element }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        dataset.confirm = 'Add new user';
        overlayDataset.confirm = dataset.confirm;
    }
}
exports.confirm = confirm;
function handleFailure({ element, response }) {
    const form = element.querySelector(types_1.Selector.addNewUserForm);
    const errorElements = form && new Set(Array.from(form.querySelectorAll(types_1.Selector.addNewUserFormInputError)) || []);
    let selector;
    let errorSelector;
    let error;
    let input;
    let inputData;
    ;
    let inputError;
    let inputErrorData;
    if (form)
        for (const field in response.data) {
            selector = `input[name="${field.split('.').pop() || ''}"]`;
            errorSelector = `${selector} ~ ${types_1.Selector.addNewUserFormError}`;
            error = response.data[field][0].errorDescription
                || response.data[field][0].error
                || '';
            input = form.querySelector(selector);
            inputError = (form === null || form === void 0 ? void 0 : form.querySelector(errorSelector)) || null;
            inputData = input === null || input === void 0 ? void 0 : input.dataset;
            inputErrorData = inputError === null || inputError === void 0 ? void 0 : inputError.dataset;
            if (inputData && inputErrorData) {
                inputData.error = '';
                inputErrorData.error = inputErrorData.defaultErrorMessage || error;
                input && (errorElements === null || errorElements === void 0 ? void 0 : errorElements.delete(input));
            }
        }
    errorElements && Array.from(errorElements).forEach(errorElement => delete errorElement.dataset.error);
}
exports.handleFailure = handleFailure;
//# sourceMappingURL=add-new-user.js.map