import { Spinner } from "../../components/Spinner/Spinner";
import { useSelectedUsers } from "./usePosts";
import { IApiUser } from "../../types/user.interface";
import { PostsList } from "../../components/PostsList/PostsList";

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
        <div className="flex flex-col items-center gap-8">
            <select
                onChange={handleChangeSelect}
            >
                <option value="">All users</option>
                {
                    apiUsers?.map(user => (
                        <option
                            key={user.id}
                            value={user.id}
                        >
                            {user.name}
                        </option>
                    ))
                }
            </select>
            <PostsList apiUsers={apiUsers as IApiUser[]} selectedUserId={selectedUserId} />
        </div>
    );
};

export { PostsPage };
