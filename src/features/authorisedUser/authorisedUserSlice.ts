import { createSlice } from "@reduxjs/toolkit";
import { ICustomUser } from "../../types/user.interface";


const initialAuthorisedUserSlice: ICustomUser = {
    id: 1,
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

const authorisedUserSlice = createSlice({
    name: 'authorisedUser',
    initialState: { ...initialAuthorisedUserSlice },
    reducers: {
        setNewAuthorisedUser(state, action) {
            Object.assign(state, action.payload);
        },
        deleteAuthorisedUser() {
            return { ...initialAuthorisedUserSlice };
        }
    }
});

export const { setNewAuthorisedUser, deleteAuthorisedUser } = authorisedUserSlice.actions;
export default authorisedUserSlice.reducer;