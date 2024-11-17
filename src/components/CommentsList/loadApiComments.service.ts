import { apiEndpoints } from "../../services/apiEndpoints";
import { makeApiRequest } from "../../services/makeApiRequest";
import { IComment } from "../../types/comment.interface";
import { TLoaderData } from "../../types/loaderOfData.type";

export const loadApiComments: TLoaderData<IComment[], string> = async (postId) => {
    const comments: IComment[] = await makeApiRequest(
        `${apiEndpoints.posts}/${postId}${apiEndpoints.comments}`,
        'GET'
    );
    return comments;
};