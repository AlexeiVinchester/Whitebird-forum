import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialModalWindowState } from "./modalWindow.initial";
import { IAddPostForm } from "../../components/AddPostForm/AddPostForm";
import { IModalWindow } from "../../types/modalWindow.interface";

export interface IModalWindowData {
    ADD_POST: IAddPostForm;
};

const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: initialModalWindowState,
    reducers: {
        openModalWindow: <T extends keyof IModalWindowData>(state: IModalWindow, action: PayloadAction<{type: T, data: IModalWindowData[T]}>) => {
            state.isOpen = true;
            state.type = action.payload.type;
            state.data = action.payload.data;
        },
        closeModalWindow(state) {
            state.isOpen = false;
            state.type = null;
            state.data = null;
        }
    }
});

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;