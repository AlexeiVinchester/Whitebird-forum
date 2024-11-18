import { Card, CardContent, Typography, Divider, CardActions, IconButton, Avatar, CardHeader } from "@mui/material";
import { IApiUser } from "../../types/user.interface";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ICustomPost } from "../../types/post.interface";
import React from "react";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigateToSinglePost } from "./useNavigateToSinglePost";
import { usePost } from "./usePost";

export interface IPostCardContainer {
    post: ICustomPost;
    currentUserId: number;
    apiUsers: IApiUser[];
    deletePost: (id: number) => void;
    likePost: (id: number) => void;
    savePost: (id: number) => void;
};

const PostCardContainer = React.memo((props: IPostCardContainer) => {
    const {
        post,
        postAuthorName,
        handleClickDeletePost,
        handleClickLikePost,
        handleClickSavePost
    } = usePost(props);

    const handleClickOpen = useNavigateToSinglePost(post.id);

    const isAuthorised = useCurrentUser().isAuthorised;

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
                    props.currentUserId === post.userId &&
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
                            onClick={handleClickLikePost}
                            value="Like"
                            clickFlag={post.isLiked}
                        >
                            <ThumbUpAltIcon />
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={handleClickSavePost}
                            clickFlag={post.isSaved}
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
