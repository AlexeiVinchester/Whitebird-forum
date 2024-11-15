import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSnackMessageState } from "./snackMessage.initial";
import { IMessageInfo } from "../../types/messageInfo.interface";

const snackMessageSlice = createSlice({
    name: 'snackMessage',
    initialState: initialSnackMessageState,
    reducers: {
        showSnackMessage(state, action: PayloadAction<IMessageInfo>) {
            Object.assign(state, { ...action.payload, isOpen: true });
        },
        hideSnackMessage() {
            return { ...initialSnackMessageState };
        }
    }
});

export const { showSnackMessage, hideSnackMessage } = snackMessageSlice.actions;
export default snackMessageSlice.reducer;