import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadUsersCredentials } from "./useLoadUsersCredentials";

const LoginPage = () => {
    const { isLoading, apiUsers } = useLoadUsersCredentials();

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
