import {
    IUserRegistryElement,
    IDeleteUser,
    IDeleteUserResponse,
    Selector,
    RequestMethod
} from './types';
import closeConfirmation from './close-confirmation';

export default async function ({element}: IDeleteUser) {
    const { params, deleteUserElement: userElement } = element;
    const { deleteUserUrl } = params;
    const user = userElement && element.user.get(userElement);
    const url = user?.id && `${deleteUserUrl}/${user.id}`;
    const requestParams = {
        method: RequestMethod.DELETE
    }

    let response: IDeleteUserResponse;

    if (url) {
        try {
            response = await fetch(url, requestParams)
                .then(response => response.json());

            if (response.result === 'successful' && userElement) {
                element.deleteUserElement = undefined;

                element.user.delete(userElement);

                userElement.parentElement?.removeChild(userElement);

                closeConfirmation({element});
            }
        } catch(error) {
            console.error('Delete Usesr error');
            console.error(error);
        }
    }
}

export function confirm({element, userElement}: IDeleteUser) {
    const { shadowRoot } = element;
    const dataset: IUserRegistryElement['dataset'] = element.dataset;
    const overlay = shadowRoot?.querySelector<HTMLElement>(Selector.overlay);
    const overlayDataset: IUserRegistryElement['dataset'] | undefined = overlay?.dataset;

    if (overlayDataset) {
        dataset.confirm = 'Delete user';
        overlayDataset.confirm = dataset.confirm;
        element.deleteUserElement = userElement;
    }
}