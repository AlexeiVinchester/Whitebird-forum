import { AbsentData } from "../../components/AbsentData/AbsentData";
import { Spinner } from "../../components/Spinner/Spinner";
import { UsersList } from "../../components/UsersList/UsersList";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";

const UsersPage = () => {
    const { isLoading, apiData: apiUsers } = useLoadData(loadApiUsers);
    const { isAdmin } = useCurrentUser();

    if (!isAdmin) {
        return <AbsentData title="You are not admin" />
    }

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
