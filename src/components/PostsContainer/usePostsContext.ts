import { createContext, useContext } from "react";
import { ICustomPost } from "../../types/post.interface";
import { useDispatch } from "react-redux";
import { showErrorMessage } from "../../utils/snackMessageHelpers";

export interface IPostContext {
    addNewPost: (post: ICustomPost) => void;
    lastPostId: number;
    selectedUserId: number | null;
    close: () => void;
};

export const PostsContext = createContext<IPostContext | undefined>(undefined);

export const usePostsContext = () => {
    const context = useContext(PostsContext);
    const dispatch = useDispatch();

    if (!context) {
        dispatch(showErrorMessage(new Error('Invalid posts context!')))
    }

    return context as IPostContext;
};