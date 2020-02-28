import {
    ObservedAttributes,
    ObservedAttribute,
    EventName
} from './types'

export const shadowRoot = {
    mode: 'open'
} as ShadowRootInit;

export const observedAttributes = Object.keys(ObservedAttributes) as ObservedAttribute[];

export const eventParams = {
    bubbles: true
};

export const customEvent = {
    [EventName.connected]: new CustomEvent(EventName.connected, {
        ...eventParams
    })
}

export const idleTimeout = 1;

export const footerObserver = {
    attributes: true
};

export const clickEventName = document.ontouchstart ? 'touchstart' : 'click';

export const dependencies = [
    {
        name: 'font-awesome',
        href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'
    }
]