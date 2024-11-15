import { ICustomUser } from "../../types/user.interface";

export const initialAuthorisedUserSlice: ICustomUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    },
    isAdmin: false,
    isAuthorised: false
};
