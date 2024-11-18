import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { usePosts } from "./usePosts";
import { PostsList } from "../PostsList/PostsList";
import { AddNewPostButton } from "../AddNewPostButton/AddNewPostButton";
import { AbsentData } from "../AbsentData/AbsentData";

interface IPostsContainer {
    selectedUserId: number | null;
    apiUsers: IApiUser[];
};

const PostsContainer = ({ selectedUserId, apiUsers }: IPostsContainer) => {
    const {
        posts,
        isLoadingPosts,
        currentUser,
        deletePost,
        likePost,
        savePost,
        setPosts,
    } = usePosts(selectedUserId);

    if (isLoadingPosts) {
        return <Spinner />;
    }

    return (
        <>
            {
                posts ?
                    <>
                        <AddNewPostButton
                            setPosts={setPosts}
                            posts={posts}
                            selectedUserId={selectedUserId}
                            isAuthorised={currentUser.isAuthorised}
                        />
                        <PostsList
                            posts={posts}
                            currentUserId={currentUser.id}
                            apiUsers={apiUsers}
                            deletePost={deletePost}
                            likePost={likePost}
                            savePost={savePost}
                        />
                    </>
                    :
                    <AbsentData />
            }
        </>
    );
};

export { PostsContainer }; 
