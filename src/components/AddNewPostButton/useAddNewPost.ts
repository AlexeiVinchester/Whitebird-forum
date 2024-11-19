import { useCallback } from "react";
import { ICustomPost } from "../../types/post.interface";
import { getMaxPotId } from "../../utils/postsHelpers";
import { IAddNewPostButton } from "./AddNewPostButton";
import { useModal } from "../../hooks/useModal";
import { IPostContext } from "../PostsContainer/usePostsContext";

export const useAddNewPost = ({ setPosts, posts, selectedUserId }: IAddNewPostButton) => {
    
    const { isOpen, open, close } = useModal();


    const addNewPost = useCallback((post: ICustomPost) => {
        setPosts((prev) => [...prev || [], post]);
    }, [setPosts]);

    const maxId = getMaxPotId(posts as ICustomPost[]) || 1;

    const handleClickAdd = () => {
        open();
    };

    const contextData: IPostContext = {
        addNewPost: addNewPost,
        lastPostId: maxId,
        selectedUserId,
        close: close
    }

    return {
        addNewPost,
        handleClickAdd,
        contextData,
        isOpen, 
        close
    };
};