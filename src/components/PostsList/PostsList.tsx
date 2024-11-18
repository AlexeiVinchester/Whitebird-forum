import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { PostCardContainer } from "../PostCardContainer/PostCardContainer";
import { usePosts } from "./usePosts";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useModal } from "../../hooks/useModal";
import { ModalWindow } from "../../layouts/ModalWindow/ModalWindow";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { ICustomPost } from "../../types/post.interface";
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
        setPosts
    } = usePosts(selectedUserId);

    const { isOpen, open, close } = useModal();
    

    const handleClickAdd = () => {
        open();
    };

    const addNewPost = (post: ICustomPost) => {
        setPosts((prev) => [...prev || [], post]);
    };

    console.log(posts)

    const filteredPosts: ICustomPost[] = posts?.filter((post) => post.userId !== currentUser.id) as ICustomPost[];
    console.log(filteredPosts);
    if (isLoadingPosts) {
        return <Spinner />
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
            {isOpen &&
                <ModalWindow isOpen={isOpen} closeModal={close}>
                    <AddPostForm
                        lastId={posts?.length as number}
                        userId={currentUser.id}
                        closeModal={close}
                        addPost={addNewPost}
                    />
                </ModalWindow>
            }
        </>
    );
};

export { PostsList }; 
