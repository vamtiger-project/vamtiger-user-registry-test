import {
    IGetUsers,
    IUsersResponse,
    IUserRegistryElement,
    Selector
} from './types';
import handleUser from './handle-user';

const { VamtigerBrowserMethod } = self;
const { pause, intersectionObserver } = VamtigerBrowserMethod;

export default async function getUsers({ element }: IGetUsers) {
    const { params, user, shadowRoot, footerObserver, requestUrls } = element;
    const dataset: IUserRegistryElement['dataset'] = element.dataset;
    const {
        getUsersUrl = '',
        getUsersNextPageUrl = '',
        getAllUsers,
        handleUserTimeout
    } = params;
    const footer = shadowRoot?.querySelector<HTMLElement>(Selector.footer);
    const url = user.size ? getUsersNextPageUrl : getUsersUrl;

    let usersResponse: IUsersResponse;
    let currentUsers: IUsersResponse['data']['users']['data'];
    let footerVisible = 0;

    if (!requestUrls.has(url)) {
        requestUrls.add(url);

        try {
            usersResponse = url && await fetch(url)
                .then(response => response.json());

            currentUsers = usersResponse?.data?.users?.data || [];
            params.getUsersNextPageUrl = usersResponse?.data?.users?.next_page_url || '';

            for (const user of currentUsers) {
                handleUser({
                    element,
                    user
                });

                await pause({milliseconds: handleUserTimeout});
            }

            let footerVisible = Number(footer?.dataset?.visible || 0);

            if (getAllUsers || footerVisible) {
                await getUsers({element});
            }

            if (!url && footer) {
                footerObserver?.disconnect();
                intersectionObserver?.unobserve(footer);
            }
        } catch (error) {
            dataset.getUsersError = '';
        }
    }
}