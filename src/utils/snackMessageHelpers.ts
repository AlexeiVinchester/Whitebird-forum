import { showSnackMessage } from "../features/snackMessage/snackMessageSlice";
import { ApiError } from "../services/errors/apiError";
import { TAlertSeverity } from "../types/alertSeverity.type";
import { IMessageInfo } from "../types/messageInfo.interface";

export const createMessage = (message: string, severity: TAlertSeverity): IMessageInfo => {
    return { message, severity };
};

export const showErrorMessage = (error: unknown) => {
    const message =
        error instanceof ApiError ?
            `Status: ${error.httpStatus} - ${error.message}`
            : ((error instanceof Error)
                ? error.message
                : 'Unknown error occured!');
    return showSnackMessage(createMessage(message, 'error'));
};

export const showSuccessMessage = (message: string) => {
    return showSnackMessage(createMessage(message, 'success'));
};

