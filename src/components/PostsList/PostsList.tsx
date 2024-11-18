import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { PostCardContainer } from "../PostCardContainer/PostCardContainer";
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
        deletePost,
        likePost,
        savePost
    } = usePosts(selectedUserId);

    if (isLoadingPosts) {
        return <Spinner />
    }

    return (
        posts?.map(post => (
            <PostCardContainer
                key={post.id}
                post={post}
                currentUserId={currentUser.id}
                apiUsers={apiUsers as IApiUser[]}
                deletePost={deletePost}
                likePost={likePost}
                savePost={savePost}
            />
        ))
    );
};

export { PostsList }; 
