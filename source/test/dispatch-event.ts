import { expect } from 'chai';
import * as faker from 'faker';
import { EventName, IUser, IAddUserEventMessage, Selector } from '../types';
import VamtigerUserRegistry, { name } from '../element';
import {removeUsers, getElement} from './browser';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('dispatch custom events', function () {
    const element = document.body.querySelector<VamtigerUserRegistry>(name);
    const user: IUser = {
        id: 0,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        position: faker.name.jobTitle()
    }

    describe(`${EventName.connected}`, function () {
        it('element added to DOM ', function() {return new Promise(async (resolve, reject) => {
            const element = await getElement(true);

            element?.addEventListener(EventName.connected, () => {
                expect(element.parentElement).to.equal(document.body);

                element.parentElement?.removeChild(element);

                removeUsers({element});

                resolve();
            });

            element && document.body.appendChild(element);
        })});
    });

    describe(`${EventName.userAdded}`, function () {
        it('user element added to DOM ', function() {return new Promise(async resolve => {
            const element = await getElement(true);;

            element?.addEventListener(EventName.userAdded, ({detail}: CustomEventInit<IAddUserEventMessage>) => {
                expect(detail?.user).to.eq(user);

                element.parentElement?.removeChild(element);

                removeUsers({element});

                resolve();
            });

            element?.addEventListener(EventName.connected, () => {
                element.dispatchEvent(new CustomEvent(EventName.addUser, {
                    detail: {user}
                }));
            });

            element && document.body.appendChild(element);
        })});
    });
});