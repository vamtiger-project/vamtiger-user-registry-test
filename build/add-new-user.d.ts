import { IAddNewUser, IAddNewUserFailedResponse } from './types';
export default function ({ element }: IAddNewUser): Promise<void>;
export declare function confirm({ element }: IAddNewUser): void;
export declare function handleFailure({ element, response }: IAddNewUser & {
    response: IAddNewUserFailedResponse;
}): void;
