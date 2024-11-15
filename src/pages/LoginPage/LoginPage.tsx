import { useEffect, useState } from "react";
import { loadUsersData } from "./loginPage.service";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { IApiUser } from "../../types/user.interface";
import { Spinner } from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { showErrorMessage } from "../../utils/snackMessageHelpers";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiUsers, setUsers] = useState<IApiUser[] | null>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!apiUsers) {
            (async () => {
                try {
                    const users = await loadUsersData();
                    setUsers(users);
                } catch (error) {
                    dispatch(showErrorMessage(error))
                } finally {
                    setIsLoading(false);
                }

            })();
        }
    }, [apiUsers, dispatch]);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {apiUsers && (
                <div className="flex justify-center items-center min-h-[calc(100vh-240px)]">
                    <LoginForm users={apiUsers} />
                </div>
            )}
        </>
    );
};

export { LoginPage };
