import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useLoadData } from "../../hooks/useLoadData";
import { IComment } from "../../types/comment.interface";
import { loadApiComments } from "../CommentsList/loadApiComments.service";

export const useComments = (postId: string | undefined) => {
    const {
        isLoading: isLoadingComments,
        apiData: comments,
        setApiData: setComments
    } = useLoadData<IComment[], string>(loadApiComments, postId);

    const currentUser = useCurrentUser();

    const handleClickAdd = (body: string) => {
        if (body.trim()) {
            const newComment: IComment = {
                postId: +postId!,
                id: comments?.length as number + 1 || 0,
                name: currentUser.name,
                email: currentUser.email,
                body: body
            }
            setComments((prev) => {
                const updatedComments = [...prev || [], newComment];
                return updatedComments.sort((a, b) => b.id - a.id);
            });
        }
    };

    return {
        isLoadingComments,
        handleClickAdd,
        comments,
        isAuthorised: currentUser.isAuthorised
    };
};