import { CommentsList } from "../CommentsList/CommentsList";
import { Spinner } from "../Spinner/Spinner";
import { AddCommentContainer } from "../AddCommentContainer/AddCommentContainer";
import React from "react";
import { useComments } from "./useComments";

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
            <p>No comments available.</p>
    );
});

export { CommentsContainer }; 
