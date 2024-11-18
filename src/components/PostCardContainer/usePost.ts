import { useMemo, useCallback } from "react";
import { IApiUser } from "../../types/user.interface";
import { getUserNameById } from "../../utils/logInHeplers";
import { IPostCardContainer } from "./PostCardContainer";

export const usePost = ({ post, apiUsers, deletePost, likePost, savePost }: IPostCardContainer) => {
    const postAuthorName = useMemo(() => {
        return getUserNameById(apiUsers as IApiUser[], post.userId);
    }, [apiUsers, post.userId]);

    const handleClickDeletePost = useCallback(() => {
        deletePost(post.id);
    }, [deletePost, post.id]);

    const handleClickLikePost = useCallback(() => {
        likePost(post.id)
    }, [likePost, post.id]);

    const handleClickSavePost = useCallback(() => {
        savePost(post.id)
    }, [savePost, post.id]);

    return {
        post,
        postAuthorName,
        handleClickDeletePost,
        handleClickLikePost,
        handleClickSavePost
    };
};