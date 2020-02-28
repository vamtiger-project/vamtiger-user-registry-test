import { expect } from 'chai';
import * as faker from 'faker';
import {getElement} from './browser';
import handleUser from '../handle-user';
import { IUser } from '../types';

export default () => describe('Test Mode', function () {
    const element = getElement();
    const numberOfRecords = 100;

    it(`Fake Data: ${numberOfRecords} records`, async function () {
        const users: IUser[] = new Array(numberOfRecords)
            .fill(undefined)
            .map((entry, index) => ({
                id: index,
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                email: faker.internet.email(),
                position: faker.name.jobTitle()
            }));

        element && users.map(user => handleUser({element, user}));
    });
});