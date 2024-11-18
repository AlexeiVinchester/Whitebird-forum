import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useComments } from "./useComments";
import { useSinglePost } from "./useSinglePost";
import { useNavigation } from "./useNavigation";
import { AbsentData } from "../AbsentData/AbsentData";
import { PostCard } from "../PostCard/PostCard";

interface ISinglePostCard {
    apiUsers: IApiUser[];
};

const SinglePostCard = ({ apiUsers }: ISinglePostCard) => {
    const { id: currentUserId, isAuthorised } = useCurrentUser();
    const { isShowComments, handleClickComments } = useComments();
    const { postId, handleClickAllPosts } = useNavigation();
    const {
        post,
        isLoadingPost,
        postAuthorName,
        handleClickDelete,
        handleClickSave,
        handleClickLike
    } = useSinglePost(postId, apiUsers);

    if (isLoadingPost) {
        return <Spinner />
    }

    return (
        post ?
            <PostCard
                postAuthorName={postAuthorName}
                currentUserId={currentUserId}
                handleClickDelete={handleClickDelete}
                handleClickLike={handleClickLike}
                handleClickSave={handleClickSave}
                handleClickAllPosts={handleClickAllPosts}
                post={post}
                isAuthorised={isAuthorised}
                handleClickComments={handleClickComments}
                isShowComments={isShowComments}
            />
            :
            (<AbsentData />)
    );
};

export { SinglePostCard };