import { Card, CardContent, Typography, TextField, CardActions, Button } from '@mui/material';
import React, { useCallback, useState } from 'react'
import { IApiUser, ICustomUser } from '../../types/user.interface';
import { checkUsersInfo, isEmailFormatValid } from '../../utils/logInHeplers';
import { IEmailData } from '../../types/emailData.interface';
import { useDispatch } from 'react-redux';
import { setNewAuthorisedUser } from '../../features/authorisedUser/authorisedUserSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { showSuccessMessage } from '../../utils/snackMessageHelpers';

interface ILoginFormProps {
    users: IApiUser[];
};

const LoginForm = ({ users }: ILoginFormProps) => {
    const [userName, setUserName] = useState('');
    const [emailData, setEmailData] = useState<IEmailData>({
        email: '',
        isEmailValid: false
    });
    const [authError, setAuthError] = useState('');

    const location = useLocation();
    const fromPagePath = location.state?.from?.pathname || '/profile';

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            setAuthError('The username or email is incorrect.')
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
            navigate(fromPagePath, { replace: true });
        }
    };

    return (
        <Card className="w-[500px] py-10 px-6 !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px]">
            <CardContent>
                <Typography gutterBottom variant="h5" className="!mb-6 !text-[28px]">
                    Log in
                </Typography>
                <form className="flex flex-col items-center justify-center gap-8">
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter your username"
                        name="username"
                        value={userName}
                        onChange={handleChangeUserName}

                    />
                    <TextField
                        required
                        fullWidth
                        type="email"
                        variant="outlined"
                        label="Enter your email"
                        name="email"
                        value={emailData.email}
                        onChange={handleChangeEmail}
                        error={!emailData.isEmailValid && emailData.email.length > 0}
                        helperText={!emailData.isEmailValid && emailData.email.length > 0 ? 'Please enter a valid email address' : ''}
                    />
                    {authError && (
                        <Typography variant="body2" color="error" className="mt-2">
                            {authError}
                        </Typography>
                    )}
                </form>
            </CardContent>
            <CardActions className="!px-4">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="!py-3"
                    onClick={handleClick}
                    disabled={!emailData.isEmailValid || !userName}
                >
                    Log In
                </Button>
            </CardActions>
        </Card>
    );
};

export { LoginForm };
