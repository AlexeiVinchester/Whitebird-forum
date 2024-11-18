import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { loadApiPosts } from "../../pages/PostsPage/loadApiPosts.service";
import { ICustomPost } from "../../types/post.interface";
import { useLoadData } from "../../hooks/useLoadData";
import { useCallback } from "react";

export const usePosts = (selectedUserId: number | null) => {
    const currentUser = useSelector(selectIsAuthorisedUser);
    const {
        isLoading: isLoadingPosts,
        apiData: posts,
        setApiData: setPosts, 
        dispatch
    } = useLoadData<ICustomPost[], number | null>(loadApiPosts, selectedUserId);

    const deletePost = useCallback((id: number) => {
        setPosts((prevPosts) => prevPosts?.filter(
            (post) => post.id !== id) as ICustomPost[]);
    }, [setPosts]);

    const likePost = useCallback((id: number) => {
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
    }, [setPosts]);

    const savePost = useCallback((id: number) => {
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
    }, [setPosts]);

    return {
        posts,
        isLoadingPosts,
        currentUser,
        deletePost,
        likePost,
        savePost,
        setPosts, 
        dispatch
    };
};