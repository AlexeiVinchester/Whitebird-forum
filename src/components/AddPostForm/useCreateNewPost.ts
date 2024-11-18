import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModalWindow } from "../../features/modalWindow/modalWindowSlice";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { ICustomPost } from "../../types/post.interface";

export const useCreateNewPost = (selectedUserId: number | null, lastPostId: number, addPost: (post: ICustomPost) => void) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const userId = useCurrentUser().id;
    const dispatch = useDispatch();

    const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    }, []);

    const handleChangeBody = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }, []);

    const handleClickAddPost = () => {
        const newPost: ICustomPost = {
            userId,
            id: lastPostId + 1,
            title,
            body,
            isLiked: false,
            isSaved: false
        };

        if (selectedUserId === userId || selectedUserId === null) {
            addPost(newPost);
        }

        dispatch(closeModalWindow());
    };

    return {
        title,
        body,
        handleChangeTitle,
        handleChangeBody,
        handleClickAddPost
    };
};