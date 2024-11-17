import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Divider, CardActions } from "@mui/material";
import { getUserNameById } from "../../utils/logInHeplers";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigation } from "./useNavigation";
import { useComments } from "./useComments";
import { usePost } from "./usePost";

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
        handleClickDelete,
        handleClickSave,
        handleClickLike
    } = usePost(postId);


    if (isLoadingPost) {
        return <Spinner />
    }

    return (
        post ?
            <Card
                variant="outlined"
                sx={{
                    width: '90%',
                    boxShadow: '0 5px 20px #ABB2B9;',
                    borderRadius: '22px'
                }}
            >
                <div className="flex justify-between relative">
                    <CardHeader
                        avatar={
                            <Avatar
                                alt={''}
                                src="/assets/avatar.png"
                                className="!w-10 !h-10"
                            />
                        }
                        title={
                            <h3 className="text-3xl font-bold text-blue-700">
                                {getUserNameById(apiUsers as IApiUser[], post.userId)}
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
                            <IconButton
                                onClick={handleClickLike}
                                className={post.isLiked ? '!text-basic-color' : ''}
                            >
                                <ThumbUpAltIcon

                                />
                                <span className="ml-1 text-[1rem]">Like</span>
                            </IconButton>
                            <IconButton
                                onClick={handleClickSave}
                                className={`${post.isSaved ? '!text-yellow-400' : ''} !rounded-md !p-2 !hover:border !hover:border-black !hover:bg-gray-200`}
                            >
                                <BookmarkIcon
                                />
                                <span className="ml-1 text-[1rem]">Save</span>
                            </IconButton>
                        </>}

                        <IconButton
                            onClick={handleClickComments}
                        >
                            <CommentIcon />
                            <span className="ml-1 text-[1rem]">Comments</span>
                        </IconButton>
                        <IconButton
                            onClick={handleClickAllPosts}
                        >
                            <ArrowBackIcon />
                            <span className="ml-1 text-[1rem]">All posts</span>
                        </IconButton>
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
