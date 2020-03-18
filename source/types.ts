import * as VBM from 'vamtiger-browser-method/build/types';
import VamtigerUserRegistry from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    shadowUi = '[data-vamtiger-user-listing]',
    style = 'style',
    user = '[data-user]',
    footer = '[data-footer]',
    overlay = '[data-overlay]',
    confirmDialog = '[data-confirm-dialog]',
    confirmDeleteDialog = '[data-confirm-delete-user]',
    confirmAddNewUserDialog = '[data-confirm-add-new-user]',
    cancelDialog = '[data-confirm-button-cancel]',
    confirmButtonOkay = '[data-confirm-button-ok]',
    addNewUserButton = '[data-action-add-user]',
    addNewUserForm = '[data-add-new-user-form]',
    addNewUserFormError = '[data-error]',
    addNewUserFormInputError = 'input[data-error]',
    layoutMarkersToggle = '[data-layout-markers-toggle]'
}

export enum EventName {
    connected = 'vamtiger-user-registry-connected',
    addUser = 'vamtiger-user-registry-add-user',
    userAdded = 'vamtiger-user-registry-user-added'
}

export enum RequestMethod {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

export enum ObservedAttributes {
}

export enum SlotName {
    headerImage = 'header-image',
    headerCapation = 'header-caption',
    action = 'action',
    user = 'user',
    overlay = 'overlay',
    footer = 'footer'
}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
    name?: string;
    slot?: string;
}

export interface IProperties {
    innerHTML?: string;
}

export interface IDeleteUser {
    element: VamtigerUserRegistry;
    userElement?: HTMLElement;
}

export interface ICloseConfirmation {
    element: VamtigerUserRegistry;
}

export interface IUserRegistryElementDataset extends DOMStringMap{
    connected?: string;
    getUsersUrl?: string;
    getUserUrl?: string;
    getUsersError?: string;
    getAllUsers?: string;
    deleteUserUrl?: string;
    addNewUserUrl?: string;
    handleUserTimeot?: string;
    confirm?: 'Delete user' | 'Add new user';
    layoutMarkers?: string;
    testMode?: string;
    error?: string;
    defaultErrorMessage?: string;
    inactivateUserElementRender?: string;
}

export interface IHandleFooter {
    element: VamtigerUserRegistry;
    mutationLisit: MutationRecord[];
    observer: MutationObserver;
}

export interface IParams {
    getUsersUrl: string;
    getUserUrl: string;
    getUsersNextPageUrl?: string;
    getAllUsers?: boolean;

    deleteUserUrl: string;

    addNewUserUrl: string;

    handleUserTimeout: number;

    layoutMarkers: boolean;
    testMode: boolean;
}

export interface IUserRegistryElement extends HTMLElement {
    dataset: UserRegistryElementDataset;
}

export interface IGetUsers {
    element: VamtigerUserRegistry;
}

export interface IGetUser {
    element: VamtigerUserRegistry;
    userId: number;
}

export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    position: string;
}

export interface IGetUserSuccessResponse {
    result: 'successful',
    message: 'retrieved user(s)',
    data: {
        user: IUser
    }
}

export interface IGetUserFailedResponse {
    result: "failed",
    message: "retrieved user(s) failed",
    data: {
        user: number;
    }
}

export interface IResponseBase {
    result: 'successful' | 'failed' | 'error';
    message: string;
}

export interface IUsersResponse extends IResponseBase {
    data: {
        users: {
            current_page: number;
            from: number;
            last_page: number;
            per_page: number;
            to: number;
            total: number;

            first_page_url: string;
            last_page_url: string;
            next_page_url: string;
            path: string;
            prev_page_url: string | null;

            data: IUser[]
        }
    }
}

export interface IDeleteUserResponse extends IResponseBase {
    data: {
        user: number;
        delete: number;
    }
}

export interface IAddNewUserSuccessResponse {
    result: 'successful';
    message: 'added new user',
    data: {
        user: number
    }
}

export interface IAddNewUserFailedResponse {
    result: 'failed';
    message: 'failed to add new user',
    data: {
        [key: string]: {
            error: string;
            errorDescription?: string;
        }[]
    }
}

export interface IHandleUser {
    element: VamtigerUserRegistry;
    user: IUser;
}

export interface IAddNewUser {
    element: VamtigerUserRegistry;
}

export interface IAddUserEventMessage extends CustomEventInit {
    user?: IUser;
}

export interface IHandleEvent {
    element: VamtigerUserRegistry;
    event: CustomEventInit<IAddUserEventMessage>
}

type UserRegistryElementDataset = {[K in keyof IUserRegistryElementDataset]: IUserRegistryElementDataset[K]};

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type AddNewUserResponse = IResponseBase
    & (IAddNewUserSuccessResponse | IAddNewUserFailedResponse);

export type GetNewUserResponse = IResponseBase
    & (IGetUserSuccessResponse | IGetUserFailedResponse)

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.addNewUserButton ? HTMLButtonElement :
    P['selector'] extends Selector.confirmDialog
        | Selector.shadowUi
        | Selector.user
        | Selector.confirmDeleteDialog
        | Selector.confirmAddNewUserDialog
        ? HTMLDivElement :
    null;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'vamtiger-user-registry': React.DetailedHTMLProps<React.HTMLAttributes<VamtigerUserRegistry>, VamtigerUserRegistry>;
        }
    }
}