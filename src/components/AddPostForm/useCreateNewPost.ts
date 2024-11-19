import { useState, useCallback } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { ICustomPost } from "../../types/post.interface";
import { usePostsContext } from "../PostsContainer/usePostsContext";

export const useCreateNewPost = () => {
    const { addNewPost, selectedUserId, lastPostId, close } = usePostsContext();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const userId = useCurrentUser().id;

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
            addNewPost(newPost);
        }

        close();
    };

    return {
        title,
        body,
        handleChangeTitle,
        handleChangeBody,
        handleClickAddPost
    };
};