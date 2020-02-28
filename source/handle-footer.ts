import {
    IHandleFooter,
    Selector
} from './types';
import getUsers from './get-users';

export default async function ({element, mutationLisit, observer}: IHandleFooter) {
    const { shadowRoot, params } = element;
    const { getUsersNextPageUrl } = params;
    const footer = shadowRoot?.querySelector<HTMLElement>(Selector.footer);
    const footerVisible = Number(footer?.dataset?.visible || 0);

    if (getUsersNextPageUrl && footerVisible) {
        await getUsers({element});
    }
}