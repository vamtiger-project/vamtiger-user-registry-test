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
const get_users_1 = require("./get-users");
function default_1({ element, mutationLisit, observer }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { shadowRoot, params } = element;
        const { getUsersNextPageUrl } = params;
        const footer = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.footer);
        const footerVisible = Number(((_a = footer === null || footer === void 0 ? void 0 : footer.dataset) === null || _a === void 0 ? void 0 : _a.visible) || 0);
        if (getUsersNextPageUrl && footerVisible) {
            yield get_users_1.default({ element });
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=handle-footer.js.map