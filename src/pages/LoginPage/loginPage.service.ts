import { apiEndpoints } from "../../services/apiEndpoints";
import { makeApiRequest } from "../../services/makeApiRequest";
import { IApiUser } from "../../types/user.interface";

export const loadUsersData = async () => {
    const users: IApiUser[] =  await makeApiRequest(apiEndpoints.users, 'GET');
    return users;
};