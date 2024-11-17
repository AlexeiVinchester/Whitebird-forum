import { useCallback } from "react";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiPost } from "../../pages/SinglePostPage/loadApiPost.service";
import { ICustomPost } from "../../types/post.interface";

export const usePost = (postId: string | undefined) => {
    const {
        isLoading: isLoadingPost,
        apiData: post,
        setApiData: setPost
    } = useLoadData<ICustomPost, string>(loadApiPost, postId);

    const handleClickDelete = useCallback(() => setPost(null), [setPost]);

    const handleClickLike = useCallback(() => {
        setPost((prev) => {
            if (!prev) {
                return prev;
            } else {
                return { ...prev, isLiked: !prev.isLiked };
            }

        });
    }, [setPost]);

    const handleClickSave = useCallback(() => {
        setPost((prev) => {
            if (!prev) {
                return prev;
            } else {
                return { ...prev, isSaved: !prev.isSaved };
            }
        });
    }, [setPost]);

    return { post, isLoadingPost, handleClickDelete, handleClickSave, handleClickLike };
};
