"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function default_1({ element }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(types_1.Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        delete dataset.confirm;
        delete overlayDataset.confirm;
    }
}
exports.default = default_1;
//# sourceMappingURL=close-confirmation.js.map