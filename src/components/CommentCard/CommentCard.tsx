import { Avatar } from "@mui/material";
import { IComment } from "../../types/comment.interface";

interface ICommentCard {
    comment: IComment;
};

const CommentCard = ({ comment }: ICommentCard) => {
    return (
        <div className="flex items-start gap-2 mb-2">
            <Avatar
                alt={''}
                src="/assets/avatar.png"
                className="!w-5 !h-5"
            />
            <div>
                <h3 className="font-bold text-blue-700">
                    {comment.email}
                </h3>
                <h2>{comment.body}</h2>
            </div>
        </div>
    );
};

export { CommentCard };