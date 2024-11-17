import { apiEndpoints } from "../services/apiEndpoints";
import { IApiPost, ICustomPost } from "../types/post.interface";

export const getUrlForPosts = (userId: number | null) => {
    return userId
        ? `${apiEndpoints.users}/${userId}${apiEndpoints.posts}`
        : apiEndpoints.posts;
};

export const getCustomPosts = (posts: IApiPost[]): ICustomPost[] => {
    return posts.map(post => (
        { ...post, isLiked: false, isSaved: false }
    ));
};