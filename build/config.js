"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.shadowRoot = {
    mode: 'open'
};
exports.observedAttributes = Object.keys(types_1.ObservedAttributes);
exports.eventParams = {
    bubbles: true
};
exports.customEvent = {
    [types_1.EventName.connected]: new CustomEvent(types_1.EventName.connected, Object.assign({}, exports.eventParams))
};
exports.idleTimeout = 1;
exports.observer = {
    childList: true
};
exports.footerObserver = {
    attributes: true
};
exports.clickEventName = document.ontouchstart ? 'touchstart' : 'click';
exports.dependencies = [
    {
        name: 'font-awesome',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'
    }
];
//# sourceMappingURL=config.js.map