import {
    IHandleEvent
} from './types';
import handleUser from './handle-user';

export default function ({element, event}: IHandleEvent) {
    const { detail } = event;
    const user = detail?.user;

    user && handleUser({element, user});
}