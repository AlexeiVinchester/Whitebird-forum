import { Card, CardContent, Typography, Divider, CardActions, IconButton, Avatar, CardHeader } from "@mui/material";
import { IApiUser } from "../../types/user.interface";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { ICustomPost } from "../../types/post.interface";
import { getUserNameById } from "../../utils/logInHeplers";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthorisedFlag } from "../../features/authorisedUser/authorisedUserSelectors";

interface IPostCard {
    post: ICustomPost;
    currentUserId: number;
    apiUsers: IApiUser[];
    handleClickDeletePost: (id: number) => void;
    handleClickLike: (id: number) => void;
    handleClickSavePost: (id: number) => void;
}

const PostCard = ({
    post,
    currentUserId,
    apiUsers,
    handleClickDeletePost,
    handleClickLike,
    handleClickSavePost
}: IPostCard) => {
    const navigate = useNavigate();
    const handleClickOpen = () => {
        navigate(`/posts/${post.id}`);
    };

    const isAuthorised = useSelector(selectIsAuthorisedFlag);

    return (
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
                            alt={post.title}
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
                        onClick={() => handleClickDeletePost(post.id)}
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
                            onClick={() => handleClickLike(post.id)}
                        >
                            <ThumbUpAltIcon
                                className={post.isLiked ? 'text-basic-color' : ''}
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => handleClickSavePost(post.id)}
                        >
                            <BookmarkIcon
                                className={post.isSaved ? 'text-yellow-400' : ''}
                            />
                        </IconButton>
                    </>}

                    <IconButton
                        onClick={handleClickOpen}
                    >
                        <OpenInNewIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export { PostCard }; 
