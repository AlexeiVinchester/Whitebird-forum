import { apiEndpoints } from "./apiEndpoints";
import { makeApiRequest } from "./makeApiRequest";
import { TLoaderData } from "../types/loaderOfData.type";
import { ICustomUser } from "../types/user.interface";

export const loadApiUsers: TLoaderData<ICustomUser[]> = async () => {
    const users: ICustomUser[] = await makeApiRequest(apiEndpoints.users, 'GET');
    return users;
};