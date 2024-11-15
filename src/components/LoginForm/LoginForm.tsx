import { Card, CardContent, Typography, TextField, CardActions, Button } from '@mui/material';
import { IApiUser } from '../../types/user.interface';
import { useLogIn } from './useLogIn';

interface ILoginFormProps {
    users: IApiUser[];
};

const LoginForm = ({ users }: ILoginFormProps) => {
    const {
        handleChangeEmail,
        handleChangeUserName,
        handleClick,
        authError,
        userName,
        email,
        isEmailValid
    } = useLogIn(users);

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
                        value={email}
                        onChange={handleChangeEmail}
                        error={!isEmailValid && email.length > 0}
                        helperText={!isEmailValid && email.length > 0 ? 'Please enter a valid email address' : ''}
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
                    disabled={!isEmailValid || !userName}
                >
                    Log In
                </Button>
            </CardActions>
        </Card>
    );
};

export { LoginForm };
