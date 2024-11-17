import { IComment } from "../../types/comment.interface";
import { CommentCard } from "../CommentCard/CommentCard";

interface ICommentsList {
    comments: IComment[];
};

const CommentsList = ({ comments }: ICommentsList) => {
    return (
        <>
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </>
    );
};

export { CommentsList };
