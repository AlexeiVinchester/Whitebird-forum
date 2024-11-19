// import { Card, CardContent, Typography, Divider, CardActions, IconButton, Avatar, CardHeader } from "@mui/material";
import { IApiUser } from "../../types/user.interface";
import { ICustomPost } from "../../types/post.interface";
import React from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigateToSinglePost } from "./useNavigateToSinglePost";
import { usePost } from "./usePost";
import { PostCard } from "../PostCard/PostCard";

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
        <PostCard
            postAuthorName={postAuthorName}
            currentUserId={props.currentUserId}
            handleClickDelete={handleClickDeletePost}
            handleClickLike={handleClickLikePost}
            handleClickSave={handleClickSavePost}
            post={post}
            isAuthorised={isAuthorised}
            handleClickOpen={handleClickOpen}
        />
    );
});

export { PostCardContainer }; 
