import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { usePosts } from "./usePosts";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ICustomPost } from "../../types/post.interface";
import { openModalWindow } from "../../features/modalWindow/modalWindowSlice";
import { ModalWindow } from "../../layouts/ModalWindow/ModalWindow";
import { useCallback } from "react";
import { PostsList } from "../PostsList/PostsList";
import { getMaxPotId } from "../../utils/postsHelpers";
import { PostsContext } from "./usePostsContext";

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
        dispatch
    } = usePosts(selectedUserId);

    const addNewPost = useCallback((post: ICustomPost) => {
        setPosts((prev) => [...prev || [], post]);
    }, [setPosts]);


    const handleClickAdd = () => {
        const maxId = getMaxPotId(posts as ICustomPost[]);
        dispatch(openModalWindow(
            {
                type: 'ADD_POST',
                data: {
                    selectedUserId,
                    lastPostId: maxId,
                }
            }));
    };

    if (isLoadingPosts) {
        return <Spinner />;
    }

    return (
        <>
            {currentUser.isAuthorised &&
                <StyledIconButton
                    onClick={handleClickAdd}
                    value="Add new post"

                >
                    <PostAddIcon fontSize="large" className="!text-basic-color" />
                </StyledIconButton>
            }
            <PostsList
                posts={posts}
                currentUserId={currentUser.id}
                apiUsers={apiUsers as IApiUser[]}
                deletePost={deletePost}
                likePost={likePost}
                savePost={savePost}
            />
            <PostsContext.Provider value={addNewPost}>
                <ModalWindow />
            </PostsContext.Provider>

        </>
    );
};

export { PostsContainer }; 
