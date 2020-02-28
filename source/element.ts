import {
    IUserRegistryElement,
    IParams,
    IUser,
    Selector,
    ObservedAttribute,
    EventName,
    IAddUserEventMessage
} from './types';
import css from './css/document-index';
import getTemplate from './get-template';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes,
    footerObserver as footerObserverConfig,
    clickEventName,
    dependencies,
    customEvent
} from './config';
import getUsers from './get-users';
import handleFooter from './handle-footer';
import closeConfirmation from './close-confirmation';
import deleteUser from './delete-user';
import addNewUser, { confirm as addNewUserConfirm } from './add-new-user';
import handleEvent from './handle-event';

const { VamtigerBrowserMethod } = self;
const { loadScript, intersectionObserver } = VamtigerBrowserMethod;

export const name = 'vamtiger-user-registry';

css && Promise
    .all([...dependencies, { name, css }].map(loadScript))
    .catch(console.error);

export default class VamtigerUserRegistry extends HTMLElement implements IUserRegistryElement {
    readonly params: IParams;
    user = new Map<HTMLElement, IUser>();
    deleteUserElement?: HTMLElement;
    requestUrls = new Set<string>();
    footerObserver?: MutationObserver;

    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const ui = getTemplate({
            selector: Selector.shadowUi
        });
        const elements = [
            stylesheet,
            ui
        ];
        const dataset: IUserRegistryElement['dataset'] = this.dataset;
        const uiDatatset: IUserRegistryElement['dataset'] | undefined = ui?.dataset;
        const {
            getUsersUrl = '',
            getUserUrl = '',
            deleteUserUrl = '',
            handleUserTimeout = 0,
            addNewUserUrl = ''
        } = dataset;

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
        return observedAttributes;
    }

    async connectedCallback() {
        const element = this;
        const { shadowRoot, params } = element;
        const { testMode, layoutMarkers } = params;
        const shadowUi = shadowRoot?.querySelector<HTMLElement>(Selector.shadowUi);
        const layoutMarkersToggle = shadowRoot?.querySelector<HTMLElement>(Selector.layoutMarkersToggle);
        const addNewUserButton = !element.querySelector<HTMLButtonElement>(Selector.addNewUserButton) && getTemplate({
            selector: Selector.addNewUserButton
        });
        const confirmDeleteDialog = getTemplate({
            selector: Selector.confirmDeleteDialog
        });
        const confirmAddNewUserDialog = getTemplate({
            selector: Selector.confirmAddNewUserDialog
        });
        const confirmDeleteButton = confirmDeleteDialog
            ?.querySelector<HTMLElement>(Selector.confirmButtonOkay)
        const confirmAddNewUserButton = confirmAddNewUserDialog
            ?.querySelector<HTMLElement>(Selector.confirmButtonOkay)
        const elements = [
            addNewUserButton,
            confirmDeleteDialog,
            confirmAddNewUserDialog
        ];
        const closeConfirmationElements = [
            confirmDeleteDialog?.querySelector<HTMLElement>(Selector.cancelDialog),
            confirmAddNewUserDialog?.querySelector<HTMLElement>(Selector.cancelDialog)
        ];
        const footer = shadowRoot?.querySelector<HTMLElement>(Selector.footer);
        const dataset: IUserRegistryElement['dataset'] = this.dataset;

        elements.forEach(currentElement => currentElement && element.appendChild(currentElement));

        closeConfirmationElements.forEach(currentElement => currentElement && currentElement
            .addEventListener(clickEventName, () => closeConfirmation({element})));

        if (addNewUserButton) {
            addNewUserButton.addEventListener(clickEventName, () => addNewUserConfirm({element}));
        }

        if (confirmDeleteButton) {
            confirmDeleteButton.addEventListener(clickEventName, () => deleteUser({element}));
        }

        if (confirmAddNewUserButton) {
            confirmAddNewUserButton.addEventListener(clickEventName, () => addNewUser({element}));
        }

        if (footer && intersectionObserver) {
            this.footerObserver = new MutationObserver((mutationLisit, observer) => handleFooter({
                element,
                mutationLisit,
                observer
            }));

            this.footerObserver.observe(footer, footerObserverConfig);
            intersectionObserver.observe(footer);
        } else {
            dataset.getAllUsers = '';
        }

        if (testMode || layoutMarkers) {
            layoutMarkersToggle?.addEventListener(clickEventName, () => {
                if (shadowUi) {
                    shadowUi.dataset.layoutMarkers = '';

                    if (layoutMarkersToggle.dataset.hasOwnProperty('active')) {
                        delete layoutMarkersToggle.dataset.active;
                        delete element.dataset.layoutMarkers;
                        delete shadowUi?.dataset.layoutMarkers;
                    } else {
                        layoutMarkersToggle.dataset.active = '';
                        element.dataset.layoutMarkers = '';
                    }
                }
            })
        }

        await getUsers({ element });

        dataset.connected = '';

        element.addEventListener(
            EventName.addUser,
            (event: CustomEventInit<IAddUserEventMessage>) => handleEvent({element, event}));

        element.dispatchEvent(customEvent["vamtiger-user-registry-connected"]);
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}