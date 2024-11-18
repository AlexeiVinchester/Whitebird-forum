import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Divider, CardActions } from "@mui/material";
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useComments } from "./useComments";
import { usePost } from "./usePost";
import { useNavigation } from "./useNavigation";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

interface ISinglePostCard {
    apiUsers: IApiUser[] | null;
};

const SinglePostCard = ({ apiUsers }: ISinglePostCard) => {
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
    } = usePost(postId, apiUsers);

    if (isLoadingPost) {
        return <Spinner />
    }

    return (
        post ?
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
                                color='text-yellow-400'
                                value="Save"
                            >
                                <BookmarkIcon />
                            </StyledIconButton>
                        </>}
                        <StyledIconButton
                            onClick={handleClickComments}
                            value="Comments"
                            clickFlag={isShowComments}
                        >
                            <CommentIcon />
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={handleClickAllPosts}
                            value="All posts"
                        >
                            <ArrowBackIcon />
                        </StyledIconButton>
                    </div>
                </CardActions>
                {isShowComments &&
                    <CardContent>
                        <CommentsContainer postId={postId} />
                    </CardContent>
                }
            </Card>
            :
            (<p>Post was deleted</p>)
    );
};

export { SinglePostCard };