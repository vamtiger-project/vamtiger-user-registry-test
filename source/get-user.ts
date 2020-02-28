import {
    IGetUser,
    GetNewUserResponse
} from './types';
import handleUser from './handle-user';
import closeConfirmation from './close-confirmation'

export default async function ({ element,  userId }: IGetUser) {
    const { params } = element;
    const { getUserUrl } = params;
    const url = getUserUrl && `${getUserUrl}/${userId}`;

    let response: GetNewUserResponse;

    if (url) {
        try {
            response = await fetch(url)
                .then(response => response.json());

            if (response.result === 'successful') {
                closeConfirmation({ element });

                await handleUser({
                    element,
                    user: response.data.user
                });
            }
        } catch(error) {
            console.error('Error getting user');
            console.error(error);
        }
    }
}