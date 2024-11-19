import { useMemo, useCallback } from "react";
import { IApiUser } from "../../types/user.interface";
import { getUserNameById } from "../../utils/usersHeplers";
import { IPostCardContainer } from "./PostCardContainer";
import { IPostAuthorData } from "../../types/postAuthorData.interface";

export const usePost = ({ post, apiUsers, deletePost, likePost, savePost }: IPostCardContainer) => {
    const { postAuthorName, postAuthorEmail } = useMemo(() => {
        return getUserNameById(apiUsers as IApiUser[], post.userId);
    }, [apiUsers, post.userId]) as IPostAuthorData;

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
        handleClickSavePost,
        postAuthorEmail
    };
};