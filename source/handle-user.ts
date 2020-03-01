import {
    IHandleUser,
    Selector,
    SlotName,
    EventName
} from './types';
import {
    eventParams
} from './config';
import { idleTimeout, clickEventName } from './config';
import getTemplate from './get-template';
import { confirm as confirmDelete } from './delete-user';

const { requestIdleCallback } = self;

export default function (params: IHandleUser) {
    const { element } = params;

    if (!element.user) {
        element.user = new Map();
    }

    if (requestIdleCallback) {
        requestIdleCallback(() => handleUser(params));
    } else {
        setTimeout(() => handleUser(params), idleTimeout);
    }
}

function handleUser({element, user}: IHandleUser) {
    const { name, surname, email } = user;
    const ignore = element.user && Array
        .from(element.user.values())
        .some(({id}) => id === user.id);
    const userTemplate = !ignore && [
        `<span data-name>${name}</span>`,
        `<span data-surname>${surname}</span>`,
        `<span data-email>${email}</span>`,
        '<span data-delete class="fa fa-trash" aria-hidden="true"></delete>'
    ].join('');
    const userElement = userTemplate  && getTemplate({
        selector: Selector.user,
        properties: {
            innerHTML: userTemplate
        },
        attributes: {
            slot: SlotName.user
        }
    });

    if (userElement) {
        element.user.set(userElement, user);

        element.appendChild(userElement);

        element.dispatchEvent(new CustomEvent(
            EventName.userAdded,
            {
                ...eventParams,
                detail: {user}
            }
        ));

        userElement.addEventListener('mouseenter', () => userElement.dataset.hover = '');
        userElement.addEventListener('mouseleave', () => delete userElement.dataset.hover);
        userElement.addEventListener(clickEventName, () => confirmDelete({element, userElement}));
    }
}