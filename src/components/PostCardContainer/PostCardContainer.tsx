import { Card, CardContent, Typography, Divider, CardActions, IconButton, Avatar, CardHeader } from "@mui/material";
import { IApiUser } from "../../types/user.interface";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ICustomPost } from "../../types/post.interface";
import { getUserNameById } from "../../utils/logInHeplers";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import React from "react";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";

interface IPostCard {
    post: ICustomPost;
    currentUserId: number;
    apiUsers: IApiUser[];
    deletePost: (id: number) => void;
    likePost: (id: number) => void;
    savePost: (id: number) => void;
};

const PostCardContainer = React.memo(({ post, currentUserId, apiUsers, deletePost, likePost, savePost }: IPostCard) => {
    const {
        id: postId,
        userId: postUserId,
        title,
        body,
        isLiked,
        isSaved
    } = post;

    const navigate = useNavigate();
    const handleClickOpen = useCallback(() => {
        navigate(`/posts/${postId}`);
    }, [navigate, postId]);

    const isAuthorised = useCurrentUser().isAuthorised;

    const postAuthorName = useMemo(() => {
        return getUserNameById(apiUsers as IApiUser[], postUserId);
    }, [apiUsers, postUserId]);

    const handleClickDeletePost = useCallback(() => {
        deletePost(postId);
    }, [deletePost, postId]);

    const handleClickLikePost = useCallback(() => {
        likePost(postId)
    }, [likePost, postId]);

    const handleClickSavePost = useCallback(() => {
        savePost(postId)
    }, [savePost, postId]);

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
                    currentUserId === postUserId &&
                    <IconButton
                        className="!relative !right-2 !h-full !top-3"
                        onClick={handleClickDeletePost}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            </div>

            <CardContent>
                <div className="flex items-center mb-2 gap-2">
                    <Typography variant="h4" component="p">
                        {title}
                    </Typography>
                </div>
                <Divider />
                <Typography variant="h6" component="p">
                    {body}
                </Typography>
            </CardContent>

            <CardActions>
                <div className=" w-full flex justify-around items-center">
                    {isAuthorised && <>
                        <StyledIconButton
                            onClick={handleClickLikePost}
                            value="Like"
                            clickFlag={isLiked}
                        >
                            <ThumbUpAltIcon />
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={handleClickSavePost}
                            clickFlag={isSaved}
                            value="Save"
                        >
                            <BookmarkIcon />
                        </StyledIconButton>
                    </>}
                    <StyledIconButton
                        onClick={handleClickOpen}
                    >
                        <OpenInNewIcon />
                    </StyledIconButton>
                </div>
            </CardActions>
        </Card>
    );
});

export { PostCardContainer }; 
