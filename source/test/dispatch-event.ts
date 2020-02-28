import { expect } from 'chai';
import * as faker from 'faker';
import { EventName, IUser, IAddUserEventMessage, Selector } from '../types';
import VamtigerUserRegistry, { name } from '../element';
import {removeUsers} from './browser';

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

    after(removeUsers);

    describe(`${EventName.connected}`, function () {
        it('element added to DOM ', async function() {return new Promise((resolve, reject) => {
            const element = document.createElement(name);

            element.addEventListener(EventName.connected, () => {
                expect(element.parentElement).to.equal(document.body);

                element.parentElement?.removeChild(element);

                resolve();
            });

            document.body.appendChild(element);
        })});
    });

    describe(`${EventName.userAdded}`, function () {
        it.skip('user element added to DOM ', function() {return new Promise(resolve => {
            element?.addEventListener(EventName.userAdded, ({detail}: CustomEventInit<IAddUserEventMessage>) => {
                expect(detail?.user).to.eq(user);

                resolve();
            });

            element?.dispatchEvent(new CustomEvent(EventName.addUser, {
                detail: {user}
            }));
        })});
    });
});