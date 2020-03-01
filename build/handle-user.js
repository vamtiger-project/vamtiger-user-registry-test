"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const config_1 = require("./config");
const config_2 = require("./config");
const get_template_1 = require("./get-template");
const delete_user_1 = require("./delete-user");
const { requestIdleCallback } = self;
function default_1(params) {
    const { element } = params;
    if (!element.user) {
        element.user = new Map();
    }
    if (requestIdleCallback) {
        requestIdleCallback(() => handleUser(params));
    }
    else {
        setTimeout(() => handleUser(params), config_2.idleTimeout);
    }
}
exports.default = default_1;
function handleUser({ element, user }) {
    const { name, surname, email } = user;
    const ignore = element.user && Array
        .from(element.user.values())
        .some(({ id }) => id === user.id);
    const userTemplate = !ignore && [
        `<span data-name>${name}</span>`,
        `<span data-surname>${surname}</span>`,
        `<span data-email>${email}</span>`,
        '<span data-delete class="fa fa-trash" aria-hidden="true"></delete>'
    ].join('');
    const userElement = userTemplate && get_template_1.default({
        selector: types_1.Selector.user,
        properties: {
            innerHTML: userTemplate
        },
        attributes: {
            slot: types_1.SlotName.user
        }
    });
    if (userElement) {
        element.user.set(userElement, user);
        element.appendChild(userElement);
        element.dispatchEvent(new CustomEvent(types_1.EventName.userAdded, Object.assign(Object.assign({}, config_1.eventParams), { detail: { user } })));
        userElement.addEventListener('mouseenter', () => userElement.dataset.hover = '');
        userElement.addEventListener('mouseleave', () => delete userElement.dataset.hover);
        userElement.addEventListener(config_2.clickEventName, () => delete_user_1.confirm({ element, userElement }));
    }
}
//# sourceMappingURL=handle-user.js.map