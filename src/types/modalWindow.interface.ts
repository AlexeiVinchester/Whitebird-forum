import { IModalWindowData } from "../features/modalWindow/modalWindowSlice";

export interface IModalWindow {
    isOpen: boolean;
    type: keyof IModalWindowData | null;
    data: IModalWindowData[keyof IModalWindowData] | null;
};
