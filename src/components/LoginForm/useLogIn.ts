import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setNewAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { IEmailData } from "../../types/emailData.interface";
import { IApiUser, ICustomUser } from "../../types/user.interface";
import { isEmailFormatValid, checkUsersInfo } from "../../utils/logInHeplers";
import { showSuccessMessage } from "../../utils/snackMessageHelpers";
import { useNavigationBack } from "./useNavigateBack";

export const useLogIn = (users: IApiUser[]) => {
    const [userName, setUserName] = useState('');
    const [authError, setAuthError] = useState('');
    const [emailData, setEmailData] = useState<IEmailData>({
        email: '',
        isEmailValid: false
    });

    const dispatch = useDispatch();
    const { fromPagePath, navigateBack } = useNavigationBack();

    const handleChangeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserName(e.target.value);
        setAuthError('');
    }, []);

    const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailData((prev) => ({
            ...prev,
            email: e.target.value,
            isEmailValid: isEmailFormatValid(e.target.value)
        }));
        setAuthError('');
    }, []);

    const handleClick = () => {
        const { email } = emailData;
        const { areCredentialsCorrect, userInfo, isAdmin } = checkUsersInfo(users, userName, email);
        if (!areCredentialsCorrect) {
            setAuthError('The username or email is incorrect.');
        } else {
            const authorisedUser: ICustomUser = {
                ...userInfo,
                isAuthorised: true,
                isAdmin: false
            };
            if (isAdmin) {
                authorisedUser.isAdmin = true;
                dispatch(showSuccessMessage('Hello admin!'));
            }
            dispatch(setNewAuthorisedUser(authorisedUser));
            navigateBack(fromPagePath);
        }
    };

    return { 
        handleChangeEmail, 
        handleChangeUserName, 
        handleClick, 
        authError,  
        userName,
        email: emailData.email,
        isEmailValid: emailData.isEmailValid
    };
};