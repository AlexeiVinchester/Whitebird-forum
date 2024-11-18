import React from "react";
import { ICustomPost } from "../../types/post.interface";
import { IApiUser } from "../../types/user.interface";
import { PostCardContainer } from "../PostCardContainer/PostCardContainer";

interface IPostsList {
    posts: ICustomPost[];
    currentUserId: number;
    apiUsers: IApiUser[];
    deletePost: (id: number) => void;
    likePost: (id: number) => void;
    savePost: (id: number) => void;
};

export const PostsList = React.memo(({ posts, currentUserId, apiUsers, deletePost, likePost, savePost }: IPostsList) => {
    return (
        <div className="mt-2 flex flex-col items-center gap-8">
            {
                posts.map(post => (
                    <PostCardContainer
                        key={post.id}
                        post={post}
                        currentUserId={currentUserId}
                        apiUsers={apiUsers as IApiUser[]}
                        deletePost={deletePost}
                        likePost={likePost}
                        savePost={savePost}
                    />
                ))
            }
        </div>
    );
});