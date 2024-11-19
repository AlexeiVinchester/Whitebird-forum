import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const useNavigateToSinglePost = (postId: number) => {
    const navigate = useNavigate();

    const handleClickOpen = useCallback(() => {
        navigate(`${ROUTES.POSTS}/${postId}`);
    }, [navigate, postId]);

    return handleClickOpen;
};