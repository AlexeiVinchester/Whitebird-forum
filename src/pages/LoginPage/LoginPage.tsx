import { AbsentData } from "../../components/AbsentData/AbsentData";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";

const LoginPage = () => {
    const { isLoading, apiData: apiUsers } = useLoadData(loadApiUsers);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {
                apiUsers ?
                    (
                        <div className="flex justify-center items-center min-h-[calc(100vh-240px)]">
                            <LoginForm users={apiUsers} />
                        </div>
                    ) :
                    <AbsentData title="No users" />
            }
        </>
    );
};

export { LoginPage };
