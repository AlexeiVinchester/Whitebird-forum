import { IconButton } from "@mui/material";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";
import { usePosts } from "./usePosts";
import { getUserNameById } from "../../utils/logInHeplers";
import { IApiUser } from "../../types/user.interface";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { IApiPost } from "../../types/post.interface";

const PostsPage = () => {
    const { posts, isLoadingPosts, handleChangeSelect, setPosts } = usePosts()
    const { isLoading: isLoadingUsers, apiData: apiUsers } = useLoadData(loadApiUsers)

    const currentUser = useSelector(selectIsAuthorisedUser);

    if (isLoadingUsers) {
        return <Spinner />
    }

    const handleClickDeletePost = (id: number) => {
        setPosts((prevPosts) => prevPosts?.filter(
            (post) => post.id !== id) as IApiPost[])
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
                        <div key={post.id} className="border-2 border-solid mb-2">
                            <p
                                key={post.id}
                                className="mb-2"
                            >
                                title: {post.title}
                            </p>
                            author: {getUserNameById(apiUsers as IApiUser[], post.userId)}
                            {
                                currentUser.id === post.userId &&
                                <IconButton
                                    onClick={() => handleClickDeletePost(post.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }

                        </div>

                    ))
            }
        </div>
    );
};

export { PostsPage };
