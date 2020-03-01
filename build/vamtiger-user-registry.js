(function () {
'use strict';

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
})(StringConstant || (StringConstant = {}));
var Selector;
(function (Selector) {
    Selector["shadowUi"] = "[data-vamtiger-user-listing]";
    Selector["style"] = "style";
    Selector["user"] = "[data-user]";
    Selector["footer"] = "[data-footer]";
    Selector["overlay"] = "[data-overlay]";
    Selector["confirmDialog"] = "[data-confirm-dialog]";
    Selector["confirmDeleteDialog"] = "[data-confirm-delete-user]";
    Selector["confirmAddNewUserDialog"] = "[data-confirm-add-new-user]";
    Selector["cancelDialog"] = "[data-confirm-button-cancel]";
    Selector["confirmButtonOkay"] = "[data-confirm-button-ok]";
    Selector["addNewUserButton"] = "[data-action-add-user]";
    Selector["addNewUserForm"] = "[data-add-new-user-form]";
    Selector["addNewUserFormError"] = "[data-error]";
    Selector["addNewUserFormInputError"] = "input[data-error]";
    Selector["layoutMarkersToggle"] = "[data-layout-markers-toggle]";
})(Selector || (Selector = {}));
var EventName;
(function (EventName) {
    EventName["connected"] = "vamtiger-user-registry-connected";
    EventName["addUser"] = "vamtiger-user-registry-add-user";
    EventName["userAdded"] = "vamtiger-user-registry-user-added";
})(EventName || (EventName = {}));
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["DELETE"] = "DELETE";
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
})(RequestMethod || (RequestMethod = {}));
var ObservedAttributes;
(function (ObservedAttributes) {
})(ObservedAttributes || (ObservedAttributes = {}));
var SlotName;
(function (SlotName) {
    SlotName["headerImage"] = "header-image";
    SlotName["headerCapation"] = "header-caption";
    SlotName["action"] = "action";
    SlotName["user"] = "user";
    SlotName["overlay"] = "overlay";
    SlotName["footer"] = "footer";
})(SlotName || (SlotName = {}));

var css = `vamtiger-user-registry button,vamtiger-user-registry fieldset,vamtiger-user-registry form,vamtiger-user-registry input,vamtiger-user-registry label{margin:nonne;padding:none;border:none;outline:none;-webkit-appearance:none}vamtiger-user-registry button{cursor:pointer}@-webkit-keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes b{0%{top:2em;opacity:0}to{top:0;opacity:1}}@keyframes b{0%{top:2em;opacity:0}to{top:0;opacity:1}}vamtiger-user-registry{opacity:0}vamtiger-user-registry [data-button],vamtiger-user-registry form input,vamtiger-user-registry form label{cursor:pointer}vamtiger-user-registry [data-display-grid]{display:grid}vamtiger-user-registry [data-position-relative]{position:relative}vamtiger-user-registry [slot=user]{position:relative;overflow:hidden}vamtiger-user-registry [slot=user] *{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}vamtiger-user-registry [slot=user]:nth-child(odd){background-color:#d3d3d3}vamtiger-user-registry [slot=user]:nth-child(2n),vamtiger-user-registry [slot=user] [data-delete]{background-color:#fff}vamtiger-user-registry [slot=user] [data-delete]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;height:100%;width:2em;top:0;right:-2em;-webkit-transition:right 235ms;transition:right 235ms;color:red;font-size:1.5em;pointer-events:none}vamtiger-user-registry [slot=user][data-hover] [data-delete]{right:0}vamtiger-user-registry [slot=overlay]{visibility:hidden;position:relative;grid-row:1;grid-column:1}vamtiger-user-registry [slot=overlay] [data-confirm-header]{font-size:1.5em}vamtiger-user-registry [slot=overlay] [data-confirm-body]{font-size:1.1em;margin-bottom:1em}vamtiger-user-registry [slot=overlay] [data-header-underline]{height:1px;background-color:#d3d3d3}vamtiger-user-registry [slot=overlay] [data-confirm-footer]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}vamtiger-user-registry [slot=overlay] [data-confirm-footer] [data-confirm-button]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:8em;height:3.4em}vamtiger-user-registry [slot=overlay] [data-confirm-footer] [data-confirm-button][data-confirm-button-ok]{color:#fff;background-color:#000}vamtiger-user-registry [slot=overlay] [data-confirm-footer] [data-confirm-button][data-confirm-button-cancel]{color:gray;background-color:#fff}vamtiger-user-registry [slot=overlay] [data-confirm-footer] [data-confirm-button]:hover{-webkit-filter:inver(1);filter:inver(1)}vamtiger-user-registry [slot=overlay] [data-confirm-footer] [data-confirm-button]:nth-child(n+2){margin-right:1em}vamtiger-user-registry input{border:1px solid #000}vamtiger-user-registry [data-confirm-body] [data-confirm-input-form]{grid-row-gap:1em}vamtiger-user-registry [data-confirm-body] [data-confirm-input-form] [form-group]{display:grid;grid-row-gap:.5em;position:relative;grid-auto-rows:minmax(1.2em,auto)}vamtiger-user-registry [data-confirm-body] [data-confirm-input-form] [form-group] input{padding:.4em;font-size:1em}vamtiger-user-registry [data-confirm-body] [data-confirm-input-form] [form-group] input[data-error]~[data-error]:after{display:inline-block;content:attr(data-error);font-size:.8em;color:red}vamtiger-user-registry[data-connected]{-webkit-animation:a 387ms linear forwards;animation:a 387ms linear forwards

    /* & [slot="user"]
    {
        animation: var(--vamtiger-user-listing-fade-in-animation);
    } */}vamtiger-user-registry[data-confirm] [slot=overlay]{-webkit-animation:b 135ms;animation:b 135ms}vamtiger-user-registry[data-confirm="Add new user"] [data-confirm-add-new-user],vamtiger-user-registry[data-confirm="Delete user"] [data-confirm-delete-user]{visibility:visible}vamtiger-user-registry[data-test-mode] [data-confirm-button-ok]{visibility:none;cursor:not-allowed}
/* layout markers*/vamtiger-user-registry[data-layout-markers] [slot=overlay]>:nth-child(odd){background-color:#b0c4de}vamtiger-user-registry[data-layout-markers] [slot=overlay]>:nth-child(2n){background-color:#d3d3d3}vamtiger-user-registry[data-layout-markers] [slot=overlay] [data-add-new-user-form]>:nth-of-type(odd){background-color:#ffb6c1}vamtiger-user-registry[data-layout-markers] [slot=overlay] [data-add-new-user-form]>:nth-of-type(odd)>:nth-of-type(odd){background-color:#90ee90}vamtiger-user-registry[data-layout-markers] [slot=overlay] [data-add-new-user-form]>:nth-of-type(2n){background-color:#008b8b}vamtiger-user-registry[data-layout-markers] [slot=overlay] [data-add-new-user-form]>:nth-of-type(2n)>:nth-of-type(odd){background-color:#d3d3d3}
/*# sourceMappingURL=document-index.ts.map */`;

var html = `<div slot="overlay" data-confirm-dialog data-confirm-add-new-user> <div data-confirm-header> Add new user </div> <div data-header-underline></div> <div data-confirm-body data-display-grid> <form data-add-new-user-form data-confirm-input-form data-display-grid> <div form-group> <label for="addNewUserNameInput"> Name </label> <input id="addNewUserNameInput" name="name"> <span data-error></span> </div> <div form-group> <label for="addNewUserSurnameInput"> Surname </label> <input id="addNewUserSurnameInput" name="surname"> <span data-error></span> </div> <div form-group> <label for="addNewUserEmailInput"> Email </label> <input type="email" id="addNewUserEmailInput" name="email"> <span data-error></span> </div> <div form-group> <label for="addNewUserPositionInput"> Position </label> <input id="addNewUserPositionInput" name="position"> <span data-error data-default-error-message="Please enter your current position"></span> </div> </form> </div> <div data-confirm-footer> <button data-confirm-button data-confirm-button-ok> <span>Confirm</span> </button> <button data-confirm-button data-confirm-button-cancel> <span>Cancel</span> </button> </div> </div> <div slot="overlay" data-confirm-dialog data-confirm-delete-user> <div data-confirm-header> Confirm delete </div> <div data-header-underline></div> <div data-confirm-body> <span> Please confirm that you would like to delete this user. </span> </div> <div data-confirm-footer> <button data-confirm-button data-confirm-button-ok> <span>Confirm</span> </button> <button data-confirm-button data-confirm-button-cancel> <span>Cancel</span> </button> </div> </div> <button slot="action" data-action-add-user>Add new user</button> <div data-user data-button></div> <div data-vamtiger-user-listing> <div data-test-mode> <span data-title> test mode </span> <div data-separator></div> <div data-layout-markers-controls> <span data-label> layout markers </span> <div data-layout-markers-toggle></div> </div> </div> <div data-header> <div data-header-overlay></div> <figure data-header-image> <slot name="header-image"></slot> </figure> <div data-header-caption> <slot name="header-caption"></slot> </div> </div> <div data-body> <div data-left-side-bar></div> <div data-user-listing> <div data-action> <slot name="action"></slot> </div> <div data-users> <slot name="user"></slot> </div> </div> <div data-right-side-bar></div> </div> <div data-footer> <a data-backend>Laravel</a> <span data-separator></span> <a data-frontend>Web Components</a> </div> <div data-overlay> <slot name="overlay"></slot> </div> </div>`;

var css$1 = `@-webkit-keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes a{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}:host{display:inline-block;position:relative;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:transparent;opacity:0}:host a,:host button,:host figure,:host h1,:host h2,:host h3,:host h4,:host h5,:host h6{margin:0;padding:0;border:none;outline:none;-webkit-appearance:none;text-decoration:none}:host [data-vamtiger-user-listing]{height:100%;position:relative;display:grid;grid-template-rows:300px 3fr 50px}:host [data-vamtiger-user-listing] [data-test-mode]{position:fixed;top:0;left:0;z-index:4;display:grid;grid-gap:.5em;padding:1em;font-size:1em;text-transform:uppercase;background-color:#fff;visibility:hidden}:host [data-vamtiger-user-listing] [data-test-mode] [data-separator]{height:1px;background-color:#d3d3d3}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;grid-gap:1em}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]{height:1em;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:after,:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:before{display:inline-block;content:"";height:100%;grid-column:1;grid-row:1}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:before{background-color:#ffa07a;-webkit-transition:background-color 75ms;transition:background-color 75ms;width:2.5em;border-radius:1em}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle]:after{background-color:#d3d3d3;width:1em;border-radius:100%;border:1px solid #a9a9a9;-webkit-transform:scale(1.4);transform:scale(1.4);-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:0;-webkit-transition:left 75ms;transition:left 75ms}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle][data-active]:before{background-color:#87cefa}:host [data-vamtiger-user-listing] [data-test-mode] [data-layout-markers-controls] [data-layout-markers-toggle][data-active]:after{left:25px}:host [data-vamtiger-user-listing] [data-header]{display:grid;grid-template-rows:1fr;position:relative}:host [data-vamtiger-user-listing] [data-header]>*{grid-column:1;grid-row:1;width:100%;max-height:100%}:host [data-vamtiger-user-listing] [data-header] [data-header-overlay]{background-color:rgba(0,0,0,.3);z-index:2}:host [data-vamtiger-user-listing] [data-header] [data-header-image]{z-index:1;-o-object-fit:cover;object-fit:cover;position:relative}:host [data-vamtiger-user-listing] [data-header] [data-header-caption]{display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:3;color:#fff;font-size:2em}:host [data-vamtiger-user-listing] [data-body]{display:grid;grid-template-columns:1fr 3fr 1fr}:host [data-vamtiger-user-listing] [data-body] [data-user-listing]{display:grid;grid-template-rows:50px auto;grid-gap:1em;position:relative}:host [data-vamtiger-user-listing] [data-body] [data-user-listing] [data-action]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;position:-webkit-sticky;position:sticky;top:0;z-index:2;background-color:#fff}:host [data-vamtiger-user-listing] [data-body] [data-user-listing] [data-users]{display:grid;grid-auto-rows:3em;z-index:1}:host [data-vamtiger-user-listing] [data-overlay]{overflow:auto;position:fixed;height:100vh;width:100vw;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:3;background:radial-gradient(rgba(0,0,0,.6),#000)}:host [data-vamtiger-user-listing] [data-overlay],:host [data-vamtiger-user-listing] [data-overlay] [data-confirm-delete-user]{visibility:hidden}:host [data-vamtiger-user-listing] [data-overlay][data-confirm]{-webkit-animation:a 135ms linear forwards;animation:a 135ms linear forwards}:host [data-vamtiger-user-listing] [data-footer]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;color:#fff;font-weight:1em}:host [data-vamtiger-user-listing] [data-footer] a{color:#fff;cursor:pointer}:host [data-vamtiger-user-listing] [data-footer] [data-separator]{margin:0 .5em;height:50%;width:1px;background-color:#fff}::slotted([slot=action]),[data-action] button{width:8em;display:grid;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;background-color:#000}::slotted([slot=footer]),::slotted([slot=header-image]){width:100%;max-height:100%;position:relative}::slotted([slot=header-image]){-o-object-fit:cover;object-fit:cover}::slotted([slot=user]){display:grid;grid-template-columns:repeat(2,1fr) minmax(auto,4fr);-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-gap:1em;padding-left:1em}::slotted([slot=overlay]){display:grid;grid-row-gap:1em;padding:2em;background-color:#fff}

/* Layout markers */:host [data-vamtiger-user-listing][data-test-mode] [data-test-mode]{visibility:visible}:host [data-vamtiger-user-listing][data-layout-markers]{background-color:#a9a9a9}:host [data-vamtiger-user-listing][data-layout-markers] [data-test-mode]~:nth-child(odd){background-color:#add8e6}:host [data-vamtiger-user-listing][data-layout-markers] [data-body]>:nth-child(odd){background-color:#ffb6c1}:host [data-vamtiger-user-listing][data-layout-markers] [data-user-listing]>:nth-child(odd){background-color:#90ee90}:host [data-vamtiger-user-listing][data-layout-markers] [data-user-listing]>:nth-child(2n){background-color:#fafad2}:host [data-vamtiger-user-listing][data-layout-markers] [data-action]{background-color:#add8e6}
/*# sourceMappingURL=index.ts.map */`;

const { nothing } = StringConstant;
const template = document.createElement('template');
const stylesheet = `<style>${css$1}</style>`;
const templateHtml = [
    stylesheet,
    html
].join(nothing);
template.innerHTML = templateHtml;
var getTemplate = (params) => {
    const { selector, attributes = {}, properties = {} } = params;
    const attributesKeys = Object.keys(attributes);
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true);
    if (currentTemplate) {
        Object.assign(currentTemplate, properties);
        attributesKeys.forEach(key => attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''));
    }
    return currentTemplate;
};

const shadowRoot = {
    mode: 'open'
};
const observedAttributes = Object.keys(ObservedAttributes);
const eventParams = {
    bubbles: true
};
const customEvent = {
    [EventName.connected]: new CustomEvent(EventName.connected, Object.assign({}, eventParams))
};
const idleTimeout = 1;
const footerObserver = {
    attributes: true
};
const clickEventName = document.ontouchstart ? 'touchstart' : 'click';
const dependencies = [
    {
        name: 'font-awesome',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'
    }
];

function closeConfirmation ({ element }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        delete dataset.confirm;
        delete overlayDataset.confirm;
    }
}

function deleteUser ({ element }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { params, deleteUserElement: userElement } = element;
        const { deleteUserUrl } = params;
        const user = userElement && element.user.get(userElement);
        const url = (user === null || user === void 0 ? void 0 : user.id) && `${deleteUserUrl}/${user.id}`;
        const requestParams = {
            method: RequestMethod.DELETE
        };
        let response;
        if (url) {
            try {
                response = yield fetch(url, requestParams)
                    .then(response => response.json());
                if (response.result === 'successful' && userElement) {
                    element.deleteUserElement = undefined;
                    element.user.delete(userElement);
                    (_a = userElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(userElement);
                    closeConfirmation({ element });
                }
            }
            catch (error) {
                console.error('Delete Usesr error');
                console.error(error);
            }
        }
    });
}
function confirm({ element, userElement }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        dataset.confirm = 'Delete user';
        overlayDataset.confirm = dataset.confirm;
        element.deleteUserElement = userElement;
    }
}

const { requestIdleCallback } = self;
function handleUser (params) {
    const { element } = params;
    if (!element.user) {
        element.user = new Map();
    }
    if (requestIdleCallback) {
        requestIdleCallback(() => handleUser$1(params));
    }
    else {
        setTimeout(() => handleUser$1(params), idleTimeout);
    }
}
function handleUser$1({ element, user }) {
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
    const userElement = userTemplate && getTemplate({
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
        element.dispatchEvent(new CustomEvent(EventName.userAdded, Object.assign(Object.assign({}, eventParams), { detail: { user } })));
        userElement.addEventListener('mouseenter', () => userElement.dataset.hover = '');
        userElement.addEventListener('mouseleave', () => delete userElement.dataset.hover);
        userElement.addEventListener(clickEventName, () => confirm({ element, userElement }));
    }
}

const { VamtigerBrowserMethod } = self;
const { pause, intersectionObserver } = VamtigerBrowserMethod;
function getUsers({ element }) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const { params, user, shadowRoot, footerObserver, requestUrls } = element;
        const dataset = element.dataset;
        const { getUsersUrl = '', getUsersNextPageUrl = '', getAllUsers, handleUserTimeout } = params;
        const footer = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(Selector.footer);
        const url = user.size ? getUsersNextPageUrl : getUsersUrl;
        let usersResponse;
        let currentUsers;
        if (!requestUrls.has(url)) {
            requestUrls.add(url);
            try {
                usersResponse = url && (yield fetch(url)
                    .then(response => response.json()));
                currentUsers = ((_b = (_a = usersResponse === null || usersResponse === void 0 ? void 0 : usersResponse.data) === null || _a === void 0 ? void 0 : _a.users) === null || _b === void 0 ? void 0 : _b.data) || [];
                params.getUsersNextPageUrl = ((_d = (_c = usersResponse === null || usersResponse === void 0 ? void 0 : usersResponse.data) === null || _c === void 0 ? void 0 : _c.users) === null || _d === void 0 ? void 0 : _d.next_page_url) || '';
                for (const user of currentUsers) {
                    yield handleUser({
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

function handleFooter ({ element, mutationLisit, observer }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { shadowRoot, params } = element;
        const { getUsersNextPageUrl } = params;
        const footer = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(Selector.footer);
        const footerVisible = Number(((_a = footer === null || footer === void 0 ? void 0 : footer.dataset) === null || _a === void 0 ? void 0 : _a.visible) || 0);
        if (getUsersNextPageUrl && footerVisible) {
            yield getUsers({ element });
        }
    });
}

function getUser ({ element, userId }) {
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
                    closeConfirmation({ element });
                    yield handleUser({
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

function addNewUser ({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params } = element;
        const { addNewUserUrl: url } = params;
        const form = element.querySelector(Selector.addNewUserForm);
        const formData = form && new FormData(form);
        const requestParams = {
            method: RequestMethod.POST,
            body: formData
        };
        let response;
        if (url) {
            try {
                response = yield fetch(url, requestParams)
                    .then(response => response.json());
                if (response.result === 'successful') {
                    yield getUser({
                        element,
                        userId: response.data.user
                    });
                    form === null || form === void 0 ? void 0 : form.reset();
                }
                else {
                    handleFailure({ element, response });
                }
            }
            catch (error) {
                console.error('Error Adding New User');
                console.error(error);
            }
        }
    });
}
function confirm$1({ element }) {
    const { shadowRoot } = element;
    const dataset = element.dataset;
    const overlay = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector(Selector.overlay);
    const overlayDataset = overlay === null || overlay === void 0 ? void 0 : overlay.dataset;
    if (overlayDataset) {
        dataset.confirm = 'Add new user';
        overlayDataset.confirm = dataset.confirm;
    }
}
function handleFailure({ element, response }) {
    const form = element.querySelector(Selector.addNewUserForm);
    const errorElements = form && new Set(Array.from(form.querySelectorAll(Selector.addNewUserFormInputError)) || []);
    let selector;
    let errorSelector;
    let error;
    let input;
    let inputData;
    let inputError;
    let inputErrorData;
    if (form)
        for (const field in response.data) {
            selector = `input[name="${field.split('.').pop() || ''}"]`;
            errorSelector = `${selector} ~ ${Selector.addNewUserFormError}`;
            error = response.data[field][0].errorDescription
                || response.data[field][0].error
                || '';
            input = form.querySelector(selector);
            inputError = (form === null || form === void 0 ? void 0 : form.querySelector(errorSelector)) || null;
            inputData = input === null || input === void 0 ? void 0 : input.dataset;
            inputErrorData = inputError === null || inputError === void 0 ? void 0 : inputError.dataset;
            if (inputData && inputErrorData) {
                inputData.error = '';
                inputErrorData.error = inputErrorData.defaultErrorMessage || error;
                input && (errorElements === null || errorElements === void 0 ? void 0 : errorElements.delete(input));
            }
        }
    errorElements && Array.from(errorElements).forEach(errorElement => delete errorElement.dataset.error);
}

function handleEvent ({ element, event }) {
    const { detail } = event;
    const user = detail === null || detail === void 0 ? void 0 : detail.user;
    user && handleUser({ element, user });
}

const { VamtigerBrowserMethod: VamtigerBrowserMethod$1 } = self;
const { loadScript, intersectionObserver: intersectionObserver$1 } = VamtigerBrowserMethod$1;
const name = 'vamtiger-user-registry';
css && Promise
    .all([...dependencies, { name, css }].map(loadScript))
    .catch(console.error);
class VamtigerUserRegistry extends HTMLElement {
    constructor() {
        super();
        this.user = new Map();
        this.requestUrls = new Set();
        const shadowRoot$$1 = this.attachShadow(shadowRoot);
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
            getAllUsers: dataset.hasOwnProperty('getAllUsers') || !intersectionObserver$1
        };
        if (this.params.layoutMarkers && uiDatatset) {
            uiDatatset.layoutMarkers = '';
        }
        if (this.params.testMode && uiDatatset) {
            uiDatatset.testMode = '';
        }
        elements.forEach(element => element && shadowRoot$$1.appendChild(element));
    }
    static get observedAttributes() {
        return observedAttributes;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this;
            const { shadowRoot: shadowRoot$$1, params } = element;
            const { testMode, layoutMarkers } = params;
            const shadowUi = shadowRoot$$1 === null || shadowRoot$$1 === void 0 ? void 0 : shadowRoot$$1.querySelector(Selector.shadowUi);
            const layoutMarkersToggle = shadowRoot$$1 === null || shadowRoot$$1 === void 0 ? void 0 : shadowRoot$$1.querySelector(Selector.layoutMarkersToggle);
            const addNewUserButton = !element.querySelector(Selector.addNewUserButton) && getTemplate({
                selector: Selector.addNewUserButton
            });
            const confirmDeleteDialog = getTemplate({
                selector: Selector.confirmDeleteDialog
            });
            const confirmAddNewUserDialog = getTemplate({
                selector: Selector.confirmAddNewUserDialog
            });
            const confirmDeleteButton = confirmDeleteDialog === null || confirmDeleteDialog === void 0 ? void 0 : confirmDeleteDialog.querySelector(Selector.confirmButtonOkay);
            const confirmAddNewUserButton = confirmAddNewUserDialog === null || confirmAddNewUserDialog === void 0 ? void 0 : confirmAddNewUserDialog.querySelector(Selector.confirmButtonOkay);
            const elements = [
                addNewUserButton,
                confirmDeleteDialog,
                confirmAddNewUserDialog
            ];
            const closeConfirmationElements = [
                confirmDeleteDialog === null || confirmDeleteDialog === void 0 ? void 0 : confirmDeleteDialog.querySelector(Selector.cancelDialog),
                confirmAddNewUserDialog === null || confirmAddNewUserDialog === void 0 ? void 0 : confirmAddNewUserDialog.querySelector(Selector.cancelDialog)
            ];
            const footer = shadowRoot$$1 === null || shadowRoot$$1 === void 0 ? void 0 : shadowRoot$$1.querySelector(Selector.footer);
            const dataset = this.dataset;
            elements.forEach(currentElement => currentElement && element.appendChild(currentElement));
            closeConfirmationElements.forEach(currentElement => currentElement && currentElement
                .addEventListener(clickEventName, () => closeConfirmation({ element })));
            if (addNewUserButton) {
                addNewUserButton.addEventListener(clickEventName, () => confirm$1({ element }));
            }
            if (confirmDeleteButton) {
                confirmDeleteButton.addEventListener(clickEventName, () => deleteUser({ element }));
            }
            if (confirmAddNewUserButton) {
                confirmAddNewUserButton.addEventListener(clickEventName, () => addNewUser({ element }));
            }
            if (footer && intersectionObserver$1) {
                this.footerObserver = new MutationObserver((mutationLisit, observer$$1) => handleFooter({
                    element,
                    mutationLisit,
                    observer: observer$$1
                }));
                this.footerObserver.observe(footer, footerObserver);
                intersectionObserver$1.observe(footer);
            }
            else {
                dataset.getAllUsers = '';
            }
            if (testMode || layoutMarkers) {
                layoutMarkersToggle === null || layoutMarkersToggle === void 0 ? void 0 : layoutMarkersToggle.addEventListener(clickEventName, () => {
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
            yield getUsers({ element });
            dataset.connected = '';
            element.addEventListener(EventName.addUser, (event) => handleEvent({ element, event }));
            element.dispatchEvent(customEvent["vamtiger-user-registry-connected"]);
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}

const { VamtigerBrowserMethod: VamtigerBrowserMethod$2 } = self;
const { defineCustomElement } = VamtigerBrowserMethod$2;
defineCustomElement({
    name,
    constructor: VamtigerUserRegistry
});

}());
//# sourceMappingURL=vamtiger-user-registry.js.map
