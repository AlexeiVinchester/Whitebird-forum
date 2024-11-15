import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAuthorisedUserSlice } from "./authorisedUser.initial";
import { ICustomUser } from "../../types/user.interface";

const authorisedUserSlice = createSlice({
    name: 'authorisedUser',
    initialState: { ...initialAuthorisedUserSlice },
    reducers: {
        setNewAuthorisedUser(state, action: PayloadAction<ICustomUser>) {
            Object.assign(state, action.payload);
        },
        deleteAuthorisedUser() {
            return { ...initialAuthorisedUserSlice };
        }
    }
});

export const { setNewAuthorisedUser, deleteAuthorisedUser } = authorisedUserSlice.actions;
export default authorisedUserSlice.reducer;