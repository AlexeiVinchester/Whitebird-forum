import { apiEndpoints } from "./apiEndpoints";
import { makeApiRequest } from "./makeApiRequest";
import { TLoaderData } from "../types/loaderOfData.type";
import { IApiUser } from "../types/user.interface";

export const loadApiUsers: TLoaderData<IApiUser[]> = async () => {
    const users: IApiUser[] =  await makeApiRequest(apiEndpoints.users, 'GET');
    return users;
};