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
const handle_user_1 = require("./handle-user");
const { VamtigerBrowserMethod } = self;
const { pause, intersectionObserver } = VamtigerBrowserMethod;
function getUsers({ element }) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const { params, user, shadowRoot, footerObserver, requestUrls } = element;
        const dataset = element.dataset;
        const { getUsersUrl = '', getUsersNextPageUrl = '', getAllUsers, handleUserTimeout } = params;
        const footer = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.footer);
        const url = user.size ? getUsersNextPageUrl : getUsersUrl;
        let usersResponse;
        let currentUsers;
        let footerVisible = 0;
        if (!requestUrls.has(url)) {
            requestUrls.add(url);
            try {
                usersResponse = url && (yield fetch(url)
                    .then(response => response.json()));
                currentUsers = ((_b = (_a = usersResponse === null || usersResponse === void 0 ? void 0 : usersResponse.data) === null || _a === void 0 ? void 0 : _a.users) === null || _b === void 0 ? void 0 : _b.data) || [];
                params.getUsersNextPageUrl = ((_d = (_c = usersResponse === null || usersResponse === void 0 ? void 0 : usersResponse.data) === null || _c === void 0 ? void 0 : _c.users) === null || _d === void 0 ? void 0 : _d.next_page_url) || '';
                for (const user of currentUsers) {
                    yield handle_user_1.default({
                        element,
                        user
                    });
                }
                let footerVisible = Number(((_e = footer === null || footer === void 0 ? void 0 : footer.dataset) === null || _e === void 0 ? void 0 : _e.visible) || 0);
                if (getAllUsers || footerVisible) {
                    yield getUsers({ element });
                }
                if (!url && footer) {
                    footerObserver === null || footerObserver === void 0 ? void 0 : footerObserver.disconnect();
                    intersectionObserver === null || intersectionObserver === void 0 ? void 0 : intersectionObserver.unobserve(footer);
                }
            }
            catch (error) {
                dataset.getUsersError = '';
            }
        }
    });
}
exports.default = getUsers;
//# sourceMappingURL=get-users.js.map