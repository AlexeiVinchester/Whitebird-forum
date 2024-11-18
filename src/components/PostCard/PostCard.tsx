import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Divider, CardActions } from "@mui/material";
import { ICustomPost } from "../../types/post.interface";
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";

interface IPostCard {
    postAuthorName: string;
    currentUserId: number;
    post: ICustomPost;
    isAuthorised: boolean;
    isShowComments?: boolean;
    handleClickDelete: () => void;
    handleClickLike: () => void;
    handleClickSave: () => void;
    handleClickAllPosts?: () => void;
    handleClickOpen?: () => void;
    handleClickComments?: () => Promise<void>;
};

const PostCard = ({
    postAuthorName,
    currentUserId,
    handleClickAllPosts,
    handleClickDelete,
    handleClickLike,
    handleClickSave,
    post,
    isAuthorised,
    handleClickComments,
    isShowComments,
    handleClickOpen
}: IPostCard) => {
    const { postId } = useParams();

    return (
        <Card
            variant="outlined"
            className="!w-[90%] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
        >
            <div className="flex justify-between relative">
                <CardHeader
                    avatar={
                        <Avatar
                            src="/assets/avatar.png"
                            className="!w-10 !h-10"
                        />
                    }
                    title={
                        <h3 className="text-3xl font-bold text-blue-700">
                            {postAuthorName}
                        </h3>}
                />
                {
                    currentUserId === post.userId &&
                    <IconButton
                        className="!relative !right-2 !h-full !top-3"
                        onClick={handleClickDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            </div>

            <CardContent>
                <div className="flex items-center mb-2 gap-2">
                    <Typography variant="h4" component="p">
                        {post.title}
                    </Typography>
                </div>
                <Divider />
                <Typography variant="h6" component="p">
                    {post.body}
                </Typography>
            </CardContent>

            <CardActions>
                <div className=" w-full flex justify-around items-center">
                    {isAuthorised && <>
                        <StyledIconButton
                            onClick={handleClickLike}
                            value="Like"
                            clickFlag={post.isLiked}
                        >
                            <ThumbUpAltIcon />
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={handleClickSave}
                            clickFlag={post.isSaved}
                            value="Save"
                        >
                            <BookmarkIcon />
                        </StyledIconButton>
                    </>}
                    {
                        postId ?
                            <>
                                <StyledIconButton
                                    onClick={handleClickComments as () => Promise<void>}
                                    value="Comments"
                                    clickFlag={isShowComments}
                                >
                                    <CommentIcon />
                                </StyledIconButton>
                                <StyledIconButton
                                    onClick={handleClickAllPosts as () => void}
                                    value="All posts"
                                >
                                    <ArrowBackIcon />
                                </StyledIconButton>
                            </>
                            :
                            <StyledIconButton
                                onClick={handleClickOpen as () => void}
                            >
                                <OpenInNewIcon />
                            </StyledIconButton>
                    }
                </div>
            </CardActions>
            {
                postId &&
                (isShowComments &&
                    <CardContent>
                        <CommentsContainer postId={postId} />
                    </CardContent>
                )
            }
        </Card>
    );
};

export { PostCard };