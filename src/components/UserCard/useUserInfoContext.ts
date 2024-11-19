import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { IApiUser } from "../../types/user.interface";
import { showErrorMessage } from "../../utils/snackMessageHelpers";

export interface IUserInfoContext {
    userInfo: IApiUser;
    editUser: (user: IApiUser) => void;
    close: () => void;
};

export const UserInfoContext = createContext<IUserInfoContext | undefined>(undefined);

export const useUserInfoContext = () => {
    const context = useContext(UserInfoContext);

    const dispatch = useDispatch();

    if (!context) {
        dispatch(showErrorMessage(new Error('Invalid user info context!')))
    }

    return context as IUserInfoContext;
};
