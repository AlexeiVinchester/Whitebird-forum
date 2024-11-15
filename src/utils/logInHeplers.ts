import { admins } from "../config/config";
import { IApiUser } from "../types/user.interface";

export const createKey = (userName: string, email: string) => `${userName}:${email}`;

export const isAdmin = (userName: string, email: string) => {
    const adminsSet = new Set(admins.map(admin => createKey(admin.userName, admin.email)));
    return adminsSet.has(createKey(userName, email));
};

export const checkUsersInfo = (users: IApiUser[], userName: string, email: string) => {
    const authData = new Map(users.map(user => [createKey(user.username, user.email), user]));
    return {
        areCredentialsCorrect: authData.has(createKey(userName, email)),
        userInfo: authData.get(createKey(userName, email)) as IApiUser,
        isAdmin: isAdmin(userName, email)
    };
};

export const isEmailFormatValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
