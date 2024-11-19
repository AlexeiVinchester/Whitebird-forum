import { ModalWindow } from "../../layouts/ModalWindow/ModalWindow";
import { ICustomPost } from "../../types/post.interface";
import { PostsContext } from "../PostsContainer/usePostsContext";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useAddNewPost } from "./useAddNewPost";
import { AddPostForm } from "../AddPostForm/AddPostForm";

export interface IAddNewPostButton {
    setPosts: React.Dispatch<React.SetStateAction<ICustomPost[] | null>>;
    posts: ICustomPost[] | null;
    selectedUserId: number | null;
    isAuthorised: boolean;
};

export const AddNewPostButton = (props: IAddNewPostButton) => {
    const {  
        handleClickAdd,
        contextData,
        isOpen,
        close
    } = useAddNewPost(props);

    if (!props.isAuthorised) {
        return null;
    }

    return (
        <>
            <StyledIconButton
                onClick={handleClickAdd}
                value="Add new post"
            >
                <PostAddIcon fontSize="large" className="!text-basic-color" />
            </StyledIconButton>
            <PostsContext.Provider value={contextData}>
                <ModalWindow isOpen={isOpen} onClose={close}>
                    <AddPostForm />
                </ModalWindow>
            </PostsContext.Provider>
        </>

    );
};