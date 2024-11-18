import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialModalWindowState } from "./modalWindow.initial";

const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: initialModalWindowState,
    reducers: {
        openModalWindow(state, action: PayloadAction<React.ReactNode>) {
            state.isOpen = true;
            state.element = action.payload;
        },
        closeModalWindow(state) {
            state.isOpen = false;
            state.element = null;
        }
    }
});

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;