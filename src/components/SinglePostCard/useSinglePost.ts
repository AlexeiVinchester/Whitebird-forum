import { useCallback, useMemo } from "react";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiPost } from "../../pages/SinglePostPage/loadApiPost.service";
import { ICustomPost } from "../../types/post.interface";
import { IApiUser } from "../../types/user.interface";
import { getUserNameById } from "../../utils/usersHeplers";
import { IPostAuthorData } from "../../types/postAuthorData.interface";

export const useSinglePost = (postId: string | undefined, users: IApiUser[] | null) => {
    const {
        isLoading: isLoadingPost,
        apiData: post,
        setApiData: setPost
    } = useLoadData<ICustomPost, string>(loadApiPost, postId);

    const { postAuthorName, postAuthorEmail } = useMemo(() => {
        return getUserNameById(users as IApiUser[], post?.userId as number)
    }, [post?.userId, users]) as IPostAuthorData;

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

    return {
        post,
        isLoadingPost,
        postAuthorName,
        handleClickDelete,
        handleClickSave,
        handleClickLike,
        postAuthorEmail
    };
};
