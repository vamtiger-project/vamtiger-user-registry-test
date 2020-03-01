import { setup, run } from 'mocha';
import loadScript from './load-script';
import dispatchEvent from './dispatch-event';
import slots from './slots';
import fakeData from './fake-data';
import VamtigerUserRegistry, { name } from '../element';
import { Selector, EventName } from '../types';

setup('bdd');

loadScript();
slots();
dispatchEvent();
fakeData();

run();

export function getElement(newElement?: boolean) {return new Promise((resolve: (element: VamtigerUserRegistry | null) => void, reject) => {
    let element: VamtigerUserRegistry | null;

    if (newElement) {
        element = document.createElement(name) as VamtigerUserRegistry;

        element.addEventListener(EventName.connected, () => resolve(element));

        document.body.appendChild(element);
    } else {
        element = document.body.querySelector<VamtigerUserRegistry>(name)

        resolve(element);
    };
})}

export function removeUsers({element}: {element: VamtigerUserRegistry}) {
    Array.from(element.querySelectorAll<HTMLElement>(Selector.user))
        .forEach(userElement => {
            element.removeChild(userElement);

            element.user.delete(userElement);
        });
}