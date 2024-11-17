import { makeApiRequest } from "../../services/makeApiRequest";
import { TLoaderData } from "../../types/loaderOfData.type";
import { IApiPost, ICustomPost } from "../../types/post.interface";
import { getUrlForPosts, getCustomPosts } from "../../utils/postsHelpers";

export const loadApiPosts: TLoaderData<ICustomPost[], number | null> = async (userId) => {
    const url = getUrlForPosts(userId ?? null);
    const posts: IApiPost[] = await makeApiRequest(url, 'GET');
    return getCustomPosts(posts);
};

