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
const handle_user_1 = require("./handle-user");
const close_confirmation_1 = require("./close-confirmation");
function default_1({ element, userId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params } = element;
        const { getUserUrl } = params;
        const url = getUserUrl && `${getUserUrl}/${userId}`;
        let response;
        if (url) {
            try {
                response = yield fetch(url)
                    .then(response => response.json());
                if (response.result === 'successful') {
                    close_confirmation_1.default({ element });
                    yield handle_user_1.default({
                        element,
                        user: response.data.user
                    });
                }
            }
            catch (error) {
                console.error('Error getting user');
                console.error(error);
            }
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=get-user.js.map