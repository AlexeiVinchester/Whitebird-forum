import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();

    const handleClickAllPosts = useCallback(() => navigate('/posts'), [navigate]);

    return { postId, handleClickAllPosts };
};