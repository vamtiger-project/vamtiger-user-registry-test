var index = (function (exports,chai,faker,mocha) {
'use strict';

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
var loadScript$1 = () => describe('vamtiger-user-registry', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadScript({
                src: 'vamtiger-user-registry.js'
            });
        });
    });
    it('load script', function () {
        const script = document.head.querySelector('[src="vamtiger-user-registry.js"]');
        chai.expect(script instanceof HTMLScriptElement).to.be.true;
    });
});

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

const eventParams = {
    bubbles: true
};
const customEvent = {
    [EventName.connected]: new CustomEvent(EventName.connected, Object.assign({}, eventParams))
};
const idleTimeout = 1;
const clickEventName = document.ontouchstart ? 'touchstart' : 'click';
const dependencies = [
    {
        name: 'font-awesome',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'
    }
];

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

const { VamtigerBrowserMethod: VamtigerBrowserMethod$2 } = self;
const { loadScript: loadScript$2, intersectionObserver: intersectionObserver$1 } = VamtigerBrowserMethod$2;
const name = 'vamtiger-user-registry';
css && Promise
    .all([...dependencies, { name, css }].map(loadScript$2))
    .catch(console.error);

var dispatchEvent = () => describe('dispatch custom events', function () {
    const element = document.body.querySelector(name);
    const user = {
        id: 0,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        position: faker.name.jobTitle()
    };
    describe(`${EventName.connected}`, function () {
        it('element added to DOM ', function () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const element = yield getElement(true);
                element === null || element === void 0 ? void 0 : element.addEventListener(EventName.connected, () => {
                    var _a;
                    chai.expect(element.parentElement).to.equal(document.body);
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                    removeUsers({ element });
                    resolve();
                });
                element && document.body.appendChild(element);
            }));
        });
    });
    describe(`${EventName.userAdded}`, function () {
        it('user element added to DOM ', function () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const element = yield getElement(true);
                element === null || element === void 0 ? void 0 : element.addEventListener(EventName.userAdded, ({ detail }) => {
                    var _a;
                    chai.expect(detail === null || detail === void 0 ? void 0 : detail.user).to.eq(user);
                    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                    removeUsers({ element });
                    resolve();
                });
                element === null || element === void 0 ? void 0 : element.addEventListener(EventName.connected, () => {
                    element.dispatchEvent(new CustomEvent(EventName.addUser, {
                        detail: { user }
                    }));
                });
                element && document.body.appendChild(element);
            }));
        });
    });
});

var slots = () => describe('named slots', function () {
    let element;
    before(function () {
        return new Promise(resolve => {
            element = document.createElement(name);
            element.addEventListener(EventName.connected, resolve);
            document.body.appendChild(element);
        });
    });
    after(function () {
        var _a;
        (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    });
    it(SlotName.headerImage, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${SlotName.headerImage}"]`;
            chai.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(SlotName.headerCapation, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${SlotName.headerCapation}"]`;
            chai.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(SlotName.action, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${SlotName.action}"]`;
            chai.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
    it(SlotName.user, function () {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `slot[name="${SlotName.user}"]`;
            chai.expect((_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector))
                .to.be.ok;
        });
    });
});

var fakeData = () => describe('Test Mode', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const element = yield getElement();
        const numberOfRecords = 100;
        it(`Fake Data: ${numberOfRecords} records`, function () {
            return __awaiter(this, void 0, void 0, function* () {
                const users = new Array(numberOfRecords)
                    .fill(undefined)
                    .map((entry, index) => ({
                    id: index,
                    name: faker.name.firstName(),
                    surname: faker.name.lastName(),
                    email: faker.internet.email(),
                    position: faker.name.jobTitle()
                }));
                element && users.map(user => handleUser({ element, user }));
            });
        });
    });
});

mocha.setup('bdd');
loadScript$1();
slots();
dispatchEvent();
fakeData();
mocha.run();
function getElement(newElement) {
    return new Promise((resolve, reject) => {
        let element;
        if (newElement) {
            element = document.createElement(name);
            element.addEventListener(EventName.connected, () => resolve(element));
            document.body.appendChild(element);
        }
        else {
            element = document.body.querySelector(name);
            resolve(element);
        }
    });
}
function removeUsers({ element }) {
    Array.from(element.querySelectorAll(Selector.user))
        .forEach(userElement => {
        element.removeChild(userElement);
        element.user.delete(userElement);
    });
}

exports.getElement = getElement;
exports.removeUsers = removeUsers;

return exports;

}({},chai,faker,mocha));
//# sourceMappingURL=browser.js.map
