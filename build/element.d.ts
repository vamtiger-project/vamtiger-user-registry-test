import { IUserRegistryElement, IParams, IUser, ObservedAttribute } from './types';
export declare const name = "vamtiger-user-registry";
export default class VamtigerUserRegistry extends HTMLElement implements IUserRegistryElement {
    readonly params: IParams;
    user: Map<HTMLElement, IUser>;
    deleteUserElement?: HTMLElement;
    requestUrls: Set<string>;
    footerObserver?: MutationObserver;
    constructor();
    static get observedAttributes(): never[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
