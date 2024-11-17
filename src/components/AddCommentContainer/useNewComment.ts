import { useState, useCallback } from "react";

export const useNewComment = (addNewComment: (body: string) => void) => {
    const [commentBody, setCommentBody] = useState('');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentBody(e.target.value);
    }, []);

    const handleClickAdd = () => {
        addNewComment(commentBody);
        setCommentBody('');
    };

    return { commentBody, handleChange, handleClickAdd };
};