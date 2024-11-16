import { apiEndpoints } from "../../services/apiEndpoints";
import { makeApiRequest } from "../../services/makeApiRequest";
import { IApiPost } from "../../types/post.interface";

export const loadApiPosts = async (userId: number | null) => {
    const url = userId
        ? `${apiEndpoints.users}/${userId}${apiEndpoints.posts}`
        : apiEndpoints.posts;
    const posts: IApiPost[] = await makeApiRequest(url, 'GET');

    return posts;
};