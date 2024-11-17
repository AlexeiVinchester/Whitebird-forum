import { IApiUser } from "../../types/user.interface";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";
import { Spinner } from "../../components/Spinner/Spinner";
import { SinglePostCard } from "../../components/SinglePostCard/SinglePostCard";

const SinglePostPage = () => {
    const { isLoading: isLoadingUsers, apiData: apiUsers } = useLoadData<IApiUser[]>(loadApiUsers);

    if (isLoadingUsers) {
        return <Spinner />
    }

    return (
        <SinglePostCard apiUsers={apiUsers}/>
    );
};

export { SinglePostPage };
