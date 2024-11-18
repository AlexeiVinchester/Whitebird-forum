import { CommentsList } from "../CommentsList/CommentsList";
import { Spinner } from "../Spinner/Spinner";
import { AddCommentContainer } from "../AddCommentContainer/AddCommentContainer";
import React from "react";
import { useComments } from "./useComments";
import { AbsentData } from "../AbsentData/AbsentData";

interface ICommentsContainer {
    postId: string | undefined;
};

const CommentsContainer = React.memo(({ postId }: ICommentsContainer) => {
    const { isLoadingComments, handleClickAdd, comments, isAuthorised } = useComments(postId);

    if (isLoadingComments) {
        return <Spinner />
    }

    return (
        comments?.length ?
            <>
                {isAuthorised && <AddCommentContainer onClick={handleClickAdd} />}
                <CommentsList comments={comments} />
            </>
            :
            <AbsentData />
    );
});

export { CommentsContainer }; 
