import { ISnackMessageState } from "../../types/snackMessage.interface";

export const initialSnackMessageState: ISnackMessageState = {
    isOpen: false,
    message: null,
    severity: 'success'
};

