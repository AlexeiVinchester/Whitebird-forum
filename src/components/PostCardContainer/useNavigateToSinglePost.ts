import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToSinglePost = (postId: number) => {
    const navigate = useNavigate();

    const handleClickOpen = useCallback(() => {
        navigate(`/posts/${postId}`);
    }, [navigate, postId]);

    return handleClickOpen;
};