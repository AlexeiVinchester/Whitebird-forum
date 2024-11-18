import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { PostCardContainer } from "../PostCardContainer/PostCardContainer";
import { usePosts } from "./usePosts";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { ICustomPost } from "../../types/post.interface";
import { openModalWindow } from "../../features/modalWindow/modalWindowSlice";
import { ModalWindow } from "../../layouts/ModalWindow/ModalWindow";
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
        savePost,
        setPosts,
        dispatch
    } = usePosts(selectedUserId);

    const addNewPost = (post: ICustomPost) => {
        setPosts((prev) => [...prev || [], post]);
    };

    const handleClickAdd = () => {
        dispatch(openModalWindow(
            <AddPostForm
                lastId={posts?.length as number}
                userId={currentUser.id}
                addPost={addNewPost}
            />
        ));
    };

    console.log(posts)

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
                </StyledIconButton>}
            <div className="mt-2 flex flex-col items-center gap-8">
                {posts?.map(post => (
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
                }
            </div>
            <ModalWindow />
        </>
    );
};

export { PostsList }; 
