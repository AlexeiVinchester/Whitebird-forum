import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";
import { usePosts } from "./usePosts";

const PostsPage = () => {
    const { posts, isLoadingPosts, handleChangeSelect } = usePosts()
    const { isLoading: isLoadingUsers, apiData: apiUsers } = useLoadData(loadApiUsers)

    if (isLoadingUsers) {
        return <Spinner />
    }
    return (
        <div>
            <label>Select user</label>
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
            <h1>Posts</h1>
            {
                isLoadingPosts ? <Spinner /> :

                    posts?.map(post => (
                        <p key={post.id}>{post.title}</p>
                    ))
            }
        </div>
    );
};

export { PostsPage };
