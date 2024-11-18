import { apiEndpoints } from "../services/apiEndpoints";
import { IApiPost, ICustomPost } from "../types/post.interface";

export const getUrlForPosts = (userId: number | null) => {
    return userId
        ? `${apiEndpoints.users}/${userId}${apiEndpoints.posts}`
        : apiEndpoints.posts;
};

export const getCustomPost = (post: IApiPost): ICustomPost => {
    return { ...post, isLiked: false, isSaved: false };
};

export const getCustomPosts = (posts: IApiPost[]): ICustomPost[] => {
    return posts.map(post => getCustomPost(post));
};

export const getMaxPotId = (posts: ICustomPost[]) => {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;
};

