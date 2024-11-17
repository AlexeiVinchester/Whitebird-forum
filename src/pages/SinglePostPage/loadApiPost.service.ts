import { apiEndpoints } from "../../services/apiEndpoints";
import { makeApiRequest } from "../../services/makeApiRequest";
import { TLoaderData } from "../../types/loaderOfData.type";
import { IApiPost, ICustomPost } from "../../types/post.interface";
import { getCustomPost } from "../../utils/postsHelpers";

export const loadApiPost: TLoaderData<ICustomPost, string> = async (postId) => {
    const post: IApiPost = await makeApiRequest(`${apiEndpoints.posts}/${postId}`, 'GET');
    return getCustomPost(post);
};