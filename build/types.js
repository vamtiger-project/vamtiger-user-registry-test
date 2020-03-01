"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
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
})(Selector = exports.Selector || (exports.Selector = {}));
var EventName;
(function (EventName) {
    EventName["connected"] = "vamtiger-user-registry-connected";
    EventName["addUser"] = "vamtiger-user-registry-add-user";
    EventName["userAdded"] = "vamtiger-user-registry-user-added";
})(EventName = exports.EventName || (exports.EventName = {}));
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["DELETE"] = "DELETE";
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var ObservedAttributes;
(function (ObservedAttributes) {
})(ObservedAttributes = exports.ObservedAttributes || (exports.ObservedAttributes = {}));
var SlotName;
(function (SlotName) {
    SlotName["headerImage"] = "header-image";
    SlotName["headerCapation"] = "header-caption";
    SlotName["action"] = "action";
    SlotName["user"] = "user";
    SlotName["overlay"] = "overlay";
    SlotName["footer"] = "footer";
})(SlotName = exports.SlotName || (exports.SlotName = {}));
//# sourceMappingURL=types.js.map