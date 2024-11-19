import { admins } from "../config/config";
import { iconMap } from "../share/iconsMap";
import { IApiUser } from "../types/user.interface";
import { IUserInfo } from "../types/userInfo.interface";

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

export const getUserNameById = (users: IApiUser[], id: number) => {
    const usersMap = new Map(users.map(user => [user.id, {postAuthorName: user.name, postAuthorEmail: user.email}]));
    return usersMap.get(id) || 'Unknown user';
};

export const structureUserInfo = (user: IApiUser): IUserInfo => ({
    personalContacts: {
        title: "Personal contacts",
        items: [
            { icon: iconMap.email, value: user.email },
            { icon: iconMap.phone, value: user.phone },
            { icon: iconMap.website, value: user.website },
        ],
    },
    address: {
        title: "Address",
        items: [
            { icon: iconMap.street, value: user.address.street },
            { icon: iconMap.suite, value: user.address.suite },
            { icon: iconMap.city, value: user.address.city },
            { icon: iconMap.zipcode, value: user.address.zipcode },
            {
                icon: iconMap.geo,
                value: `lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}`,
            },
        ],
    },
    company: {
        title: "Company",
        items: [
            { icon: iconMap.companyName, value: user.company.name },
            { icon: iconMap.companyCatchPhrase, value: user.company.catchPhrase },
            { icon: iconMap.companyBs, value: user.company.bs },
        ],
    },
});