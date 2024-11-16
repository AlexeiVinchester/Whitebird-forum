import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAuthorisedUserSlice } from "./authorisedUser.initial";
import { ICustomUser } from "../../types/user.interface";

const authorisedUserSlice = createSlice({
    name: 'authorisedUser',
    initialState: initialAuthorisedUserSlice,
    reducers: {
        setNewAuthorisedUser(state, action: PayloadAction<ICustomUser>) {
            Object.assign(state, action.payload);
        },
        logOutAuthorisedUser() {
            return { ...initialAuthorisedUserSlice };
        }
    }
});

export const { setNewAuthorisedUser, logOutAuthorisedUser } = authorisedUserSlice.actions;
export default authorisedUserSlice.reducer;