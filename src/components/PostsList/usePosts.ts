import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { loadApiPosts } from "../../pages/PostsPage/loadApiPosts.service";
import { ICustomPost } from "../../types/post.interface";
import { useLoadData } from "../../hooks/useLoadData";

export const usePosts = (selectedUserId: number | null) => {
    const currentUser = useSelector(selectIsAuthorisedUser);
    const { 
        isLoading: isLoadingPosts, 
        apiData: posts,
        setApiData: setPosts 
    } = useLoadData<ICustomPost[], number | null>(loadApiPosts, selectedUserId);

    const handleClickDeletePost = (id: number) => {
        setPosts((prevPosts) => prevPosts?.filter(
            (post) => post.id !== id) as ICustomPost[]);
    };

    const handleClickLike = (id: number) => {
        setPosts((prevPosts) => prevPosts?.map(
            (post) => {
                if (post.id === id) {
                    return {
                        ...post,
                        isLiked: !post.isLiked
                    }
                } else {
                    return post
                }
            }
        ) as ICustomPost[]);
    };

    const handleClickSavePost = (id: number) => {
        setPosts((prevPosts) => prevPosts?.map(
            (post) => {
                if (post.id === id) {
                    return {
                        ...post,
                        isSaved: !post.isSaved
                    }
                } else {
                    return post
                }
            }
        ) as ICustomPost[]);
    };

    return {
        posts,
        isLoadingPosts,
        currentUser,
        handleClickDeletePost,
        handleClickLike,
        handleClickSavePost
    };
};