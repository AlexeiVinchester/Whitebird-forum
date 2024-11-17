import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { PostCard } from "../PostCard/PostCard";
import { usePosts } from "./usePosts";

interface IPostsList {
    selectedUserId: number | null;
    apiUsers: IApiUser[];
};

const PostsList = ({ selectedUserId, apiUsers }: IPostsList) => {
    const {
        posts,
        isLoadingPosts,
        currentUser,
        handleClickDeletePost,
        handleClickLike,
        handleClickSavePost
    } = usePosts(selectedUserId);

    if (isLoadingPosts) {
        return <Spinner />
    }

    return (
        posts?.map(post => (
            <PostCard
                key={post.id}
                post={post}
                currentUserId={currentUser.id}
                apiUsers={apiUsers as IApiUser[]}
                handleClickDeletePost={handleClickDeletePost}
                handleClickLike={handleClickLike}
                handleClickSavePost={handleClickSavePost}
            />

        ))
    );
};

export { PostsList }; 
