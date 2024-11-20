import { AbsentData } from "../../components/AbsentData/AbsentData";
import { Spinner } from "../../components/Spinner/Spinner";
import { UsersList } from "../../components/UsersList/UsersList";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";

const UsersPage = () => {
    const { isLoading, apiData: apiUsers } = useLoadData(loadApiUsers);
    
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {
                apiUsers ?
                    <UsersList users={apiUsers} />
                    :
                    <AbsentData title="No users" />
            }
        </>
    );
};

export { UsersPage };
