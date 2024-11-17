import { useCurrentUser } from "../../hooks/useCurrentUser";
import { IButtonConfig } from "../../types/buttonConfig.interface";
import { IApiUser } from "../../types/user.interface";
import { iconButtons } from "../StyledIconButton/iconButtons";
import { useComments } from "./useComments";
import { useNavigation } from "./useNavigation";
import { usePost } from "./usePost";

export const useSinglePostCard = (users: IApiUser[] | null) => {
    const { id: currentUserId, isAuthorised } = useCurrentUser();
    const { isShowComments, handleClickComments } = useComments();
    const { postId, handleClickAllPosts } = useNavigation();
    const {
        post,
        isLoadingPost,
        postAuthorName,
        handleClickDelete,
        handleClickSave,
        handleClickLike
    } = usePost(postId, users);

    const buttonsConfig: IButtonConfig[] = [
        {   
            id: 0,
            condition: isAuthorised,
            onClick: handleClickLike,
            value: "Like",
            clickFlag: post?.isLiked,
            children: iconButtons["Like"],
        },
        {
            id: 1,
            condition: isAuthorised,
            onClick: handleClickSave,
            value: "Save",
            clickFlag: post?.isSaved,
            children: iconButtons["Save"],
            color: "text-yellow-400",
        },
        {
            id: 2,
            condition: true,
            onClick: handleClickComments,
            value: "Comments",
            clickFlag: isShowComments,
            children: iconButtons["Comments"],
        },
        { 
            id: 3,
            condition: true,
            onClick: handleClickAllPosts,
            value: "All posts",
            children: iconButtons["All posts"],
        },
    ];

    return {
        currentUserId,
        isAuthorised,
        isShowComments,
        postId,
        post,
        isLoadingPost,
        postAuthorName,
        buttonsConfig,
        handleClickDelete,
        handleClickSave,
        handleClickLike,
        handleClickComments,
        handleClickAllPosts,
    };
};