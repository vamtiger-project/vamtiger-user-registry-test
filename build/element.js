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
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const config_1 = require("./config");
const get_users_1 = require("./get-users");
const handle_footer_1 = require("./handle-footer");
const close_confirmation_1 = require("./close-confirmation");
const delete_user_1 = require("./delete-user");
const add_new_user_1 = require("./add-new-user");
const handle_event_1 = require("./handle-event");
const { VamtigerBrowserMethod } = self;
const { loadScript, intersectionObserver } = VamtigerBrowserMethod;
exports.name = 'vamtiger-user-registry';
document_index_1.default && Promise
    .all([...config_1.dependencies, { name: exports.name, css: document_index_1.default }].map(loadScript))
    .catch(console.error);
class VamtigerUserRegistry extends HTMLElement {
    constructor() {
        super();
        this.user = new Map();
        this.requestUrls = new Set();
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const ui = get_template_1.default({
            selector: types_1.Selector.shadowUi
        });
        const elements = [
            stylesheet,
            ui
        ];
        const dataset = this.dataset;
        const uiDatatset = ui === null || ui === void 0 ? void 0 : ui.dataset;
        const { getUsersUrl = '', getUserUrl = '', deleteUserUrl = '', handleUserTimeout = 0, addNewUserUrl = '' } = dataset;
        this.params = {
            layoutMarkers: dataset.hasOwnProperty('layoutMarkers'),
            testMode: dataset.hasOwnProperty('testMode'),
            addNewUserUrl,
            getUsersUrl,
            getUserUrl,
            deleteUserUrl,
            handleUserTimeout: Number(handleUserTimeout),
            getAllUsers: dataset.hasOwnProperty('getAllUsers') || !intersectionObserver
        };
        if (this.params.layoutMarkers && uiDatatset) {
            uiDatatset.layoutMarkers = '';
        }
        if (this.params.testMode && uiDatatset) {
            uiDatatset.testMode = '';
        }
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this;
            const { shadowRoot, params } = element;
            const { testMode, layoutMarkers } = params;
            const shadowUi = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.shadowUi);
            const layoutMarkersToggle = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.layoutMarkersToggle);
            const addNewUserButton = !element.querySelector(types_1.Selector.addNewUserButton) && get_template_1.default({
                selector: types_1.Selector.addNewUserButton
            });
            const confirmDeleteDialog = get_template_1.default({
                selector: types_1.Selector.confirmDeleteDialog
            });
            const confirmAddNewUserDialog = get_template_1.default({
                selector: types_1.Selector.confirmAddNewUserDialog
            });
            const confirmDeleteButton = confirmDeleteDialog === null || confirmDeleteDialog === void 0 ? void 0 : confirmDeleteDialog.querySelector(types_1.Selector.confirmButtonOkay);
            const confirmAddNewUserButton = confirmAddNewUserDialog === null || confirmAddNewUserDialog === void 0 ? void 0 : confirmAddNewUserDialog.querySelector(types_1.Selector.confirmButtonOkay);
            const elements = [
                addNewUserButton,
                confirmDeleteDialog,
                confirmAddNewUserDialog
            ];
            const closeConfirmationElements = [
                confirmDeleteDialog === null || confirmDeleteDialog === void 0 ? void 0 : confirmDeleteDialog.querySelector(types_1.Selector.cancelDialog),
                confirmAddNewUserDialog === null || confirmAddNewUserDialog === void 0 ? void 0 : confirmAddNewUserDialog.querySelector(types_1.Selector.cancelDialog)
            ];
            const footer = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.footer);
            const dataset = this.dataset;
            elements.forEach(currentElement => currentElement && element.appendChild(currentElement));
            closeConfirmationElements.forEach(currentElement => currentElement && currentElement
                .addEventListener(config_1.clickEventName, () => close_confirmation_1.default({ element })));
            if (addNewUserButton) {
                addNewUserButton.addEventListener(config_1.clickEventName, () => add_new_user_1.confirm({ element }));
            }
            if (confirmDeleteButton) {
                confirmDeleteButton.addEventListener(config_1.clickEventName, () => delete_user_1.default({ element }));
            }
            if (confirmAddNewUserButton) {
                confirmAddNewUserButton.addEventListener(config_1.clickEventName, () => add_new_user_1.default({ element }));
            }
            if (footer && intersectionObserver) {
                this.footerObserver = new MutationObserver((mutationLisit, observer) => handle_footer_1.default({
                    element,
                    mutationLisit,
                    observer
                }));
                this.footerObserver.observe(footer, config_1.footerObserver);
                intersectionObserver.observe(footer);
            }
            else {
                dataset.getAllUsers = '';
            }
            if (testMode || layoutMarkers) {
                layoutMarkersToggle === null || layoutMarkersToggle === void 0 ? void 0 : layoutMarkersToggle.addEventListener(config_1.clickEventName, () => {
                    if (shadowUi) {
                        shadowUi.dataset.layoutMarkers = '';
                        if (layoutMarkersToggle.dataset.hasOwnProperty('active')) {
                            delete layoutMarkersToggle.dataset.active;
                            delete element.dataset.layoutMarkers;
                            shadowUi === null || shadowUi === void 0 ? true : delete shadowUi.dataset.layoutMarkers;
                        }
                        else {
                            layoutMarkersToggle.dataset.active = '';
                            element.dataset.layoutMarkers = '';
                        }
                    }
                });
            }
            yield get_users_1.default({ element });
            dataset.connected = '';
            element.addEventListener(types_1.EventName.addUser, (event) => handle_event_1.default({ element, event }));
            element.dispatchEvent(config_1.customEvent["vamtiger-user-registry-connected"]);
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}
exports.default = VamtigerUserRegistry;
//# sourceMappingURL=element.js.map