import { setup, run } from 'mocha';
import loadScript from './load-script';
import dispatchEvent from './dispatch-event';
import slots from './slots';
import fakeData from './fake-data';
import VamtigerUserRegistry, { name } from '../element';
import { Selector } from '../types';

setup('bdd');

loadScript();
slots();
dispatchEvent();
fakeData();

run();

export function getElement() {
    const element = document.body.querySelector<VamtigerUserRegistry>(name);

    return element;
}

export function removeUsers() {
    const element = getElement();

    element && Array.from(element.querySelectorAll<HTMLElement>(Selector.user))
        .forEach(userElement => {
            element.removeChild(userElement);

            element.user.delete(userElement);
        });
}