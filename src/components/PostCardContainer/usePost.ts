import { useMemo, useCallback } from "react";
import { IApiUser } from "../../types/user.interface";
import { getUserNameById } from "../../utils/logInHeplers";
import { IPostCard } from "./PostCardContainer";

export const usePost = ({ post, apiUsers, deletePost, likePost, savePost }: IPostCard) => {
    const {
        id: postId,
        userId: postUserId,
    } = post;

    const postAuthorName = useMemo(() => {
        return getUserNameById(apiUsers as IApiUser[], postUserId);
    }, [apiUsers, postUserId]);

    const handleClickDeletePost = useCallback(() => {
        deletePost(postId);
    }, [deletePost, postId]);

    const handleClickLikePost = useCallback(() => {
        likePost(postId)
    }, [likePost, postId]);

    const handleClickSavePost = useCallback(() => {
        savePost(postId)
    }, [savePost, postId]);

    return {
        ...post,
        postAuthorName,
        handleClickDeletePost,
        handleClickLikePost,
        handleClickSavePost
    };
};