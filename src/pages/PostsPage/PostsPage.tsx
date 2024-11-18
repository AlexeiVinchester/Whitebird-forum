import { Spinner } from "../../components/Spinner/Spinner";
import { useSelectedUsers } from "./useSelectedUsers";
import { PostsContainer } from "../../components/PostsContainer/PostsContainer";
import { SelectUsersContainer } from "../../components/SelectUsersContainer/SelectUsersContainer";
import { AbsentData } from "../../components/AbsentData/AbsentData";

const PostsPage = () => {
    const {
        handleChangeSelect,
        selectedUserId,
        isLoadingUsers,
        apiUsers
    } = useSelectedUsers();

    if (isLoadingUsers) {
        return <Spinner />
    }

    return (
        <>
            {
                apiUsers ?
                    <div className="flex flex-col items-center">
                        <SelectUsersContainer apiUsers={apiUsers} handleChangeSelect={handleChangeSelect} />
                        <PostsContainer apiUsers={apiUsers} selectedUserId={selectedUserId} />
                    </div>
                    :
                    <AbsentData title="No users"/>
            }
        </>
    );
};

export { PostsPage };
