import { useEffect, useState } from "react";
import { loadUsersData } from "./loginPage.service";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { IApiUser } from "../../types/user.interface";
import { ApiError } from "../../services/errors/apiError";
import { Spinner } from "../../components/Spinner/Spinner";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiUsers, setUsers] = useState<IApiUser[] | null>(null);
    useEffect(() => {
        if (!apiUsers) {
            (async () => {
                try {
                    const users = await loadUsersData();
                    setUsers(users);
                } catch (error) {
                    if (error instanceof ApiError) {
                        console.log(`Status: ${error.httpStatus} - ${error.message}`);
                    } else {
                        console.log(`${(error as Error).message}`);
                    }
                } finally {
                    setIsLoading(false);
                }

            })();
        }
    }, [apiUsers]);

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
