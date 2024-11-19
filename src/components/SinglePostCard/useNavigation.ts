import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const useNavigation = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();

    const handleClickAllPosts = useCallback(() => navigate(ROUTES.POSTS), [navigate]);

    return { postId, handleClickAllPosts };
};