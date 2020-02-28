"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle_user_1 = require("./handle-user");
function default_1({ element, event }) {
    const { detail } = event;
    const user = detail === null || detail === void 0 ? void 0 : detail.user;
    user && handle_user_1.default({ element, user });
}
exports.default = default_1;
//# sourceMappingURL=handle-event.js.map