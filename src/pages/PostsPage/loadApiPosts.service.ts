import { makeApiRequest } from "../../services/makeApiRequest";
import { IApiPost } from "../../types/post.interface";
import { getUrlForPosts, getCustomPosts } from "../../utils/postsHelpers";

export const loadApiPosts = async (userId: number | null) => {
    const url = getUrlForPosts(userId);
    const posts: IApiPost[] = await makeApiRequest(url, 'GET');

    return getCustomPosts(posts);
};

