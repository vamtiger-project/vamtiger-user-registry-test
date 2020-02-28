import {
    IAddNewUser,
    IUserRegistryElement,
    IAddNewUserFailedResponse,
    Selector,
    RequestMethod,
    AddNewUserResponse
} from './types';
import getUser from './get-user';

export default async function ({element}: IAddNewUser) {
    const { params } = element;
    const { addNewUserUrl: url } = params;
    const form = element.querySelector<HTMLFormElement>(Selector.addNewUserForm);
    const formData = form && new FormData(form);
    const requestParams = {
        method: RequestMethod.POST,
        body: formData
    };

    let response: AddNewUserResponse;

    if (url) {
        try {
            response = await fetch(url, requestParams)
                .then(response => response.json());

            if (response.result === 'successful') {
                await getUser({
                    element,
                    userId: response.data.user
                });

                form?.reset();
            } else {
                handleFailure({element, response});
            }
        } catch(error) {
            console.error('Error Adding New User');
            console.error(error);
        }
    }
}

export function confirm({element}: IAddNewUser) {
    const { shadowRoot } = element;
    const dataset: IUserRegistryElement['dataset'] = element.dataset;
    const overlay = shadowRoot?.querySelector<HTMLElement>(Selector.overlay);
    const overlayDataset: IUserRegistryElement['dataset'] | undefined = overlay?.dataset;

    if (overlayDataset) {
        dataset.confirm = 'Add new user';
        overlayDataset.confirm = dataset.confirm;
    }
}

export function handleFailure({ element, response }: IAddNewUser & {response: IAddNewUserFailedResponse}) {
    const form = element.querySelector<HTMLFormElement>(Selector.addNewUserForm);
    const errorElements = form && new Set(Array.from(form.querySelectorAll<HTMLElement>(Selector.addNewUserFormInputError)) ||  []);

    let selector: string;
    let errorSelector: string;
    let error: string;
    let input: HTMLInputElement | null;
    let inputData: IUserRegistryElement['dataset'] | undefined;;
    let inputError: HTMLElement | null;
    let inputErrorData: IUserRegistryElement['dataset'] | undefined;

    if (form) for (const field in response.data) {
        selector = `input[name="${field.split('.').pop() || ''}"]`;
        errorSelector = `${selector} ~ ${Selector.addNewUserFormError}`;
        error = response.data[field][0].errorDescription
            || response.data[field][0].error
            || '';
        input = form.querySelector(selector)
        inputError = form?.querySelector(errorSelector) || null;
        inputData = input?.dataset;
        inputErrorData = inputError?.dataset;

        if (inputData && inputErrorData) {
            inputData.error = '';
            inputErrorData.error = inputErrorData.defaultErrorMessage || error;

            input && errorElements?.delete(input);
        }
    }

    errorElements && Array.from(errorElements).forEach(errorElement => delete errorElement.dataset.error);
}