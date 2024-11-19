import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Divider, CardActions } from "@mui/material";
import { ICustomPost } from "../../types/post.interface";
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { useParams } from "react-router-dom";
import { iconMap } from "../../share/iconsMap";

interface IPostCard {
    postAuthorName: string;
    postAuthorEmail: string;
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
    postAuthorEmail,
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
                        <h4 className="text-3xl font-bold text-blue-700">
                            {postAuthorName}
                            <p className="text-[16px]">{postAuthorEmail}</p>
                        </h4>}
                    className="!mb-0 !pb-0"
                />
                {
                    currentUserId === post.userId &&
                    <IconButton
                        className="!relative !right-2 !h-full !top-3"
                        onClick={handleClickDelete}
                    >
                        {iconMap.deletePost}
                    </IconButton>
                }
            </div>

            <CardContent>
                <div className="flex items-center mb-2 gap-2">
                    <Typography variant="h5" component="p">
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
                            {iconMap.likePost}
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={handleClickSave}
                            clickFlag={post.isSaved}
                            value="Save"
                        >
                            {iconMap.savePost}
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
                                    {iconMap.comments}
                                </StyledIconButton>
                                <StyledIconButton
                                    onClick={handleClickAllPosts as () => void}
                                    value="All posts"
                                >
                                    {iconMap.backToAllPosts}
                                </StyledIconButton>
                            </>
                            :
                            <StyledIconButton
                                onClick={handleClickOpen as () => void}
                            >
                                {iconMap.openPost}
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