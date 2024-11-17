import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { loadApiPosts } from "../../pages/PostsPage/loadApiPosts.service";
import { ICustomPost } from "../../types/post.interface";
import { showErrorMessage } from "../../utils/snackMessageHelpers";

export const usePosts = (selectedUserId: number | null) => {
    const [posts, setPosts] = useState<ICustomPost[] | null>(null);
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const dispatch = useDispatch();
    const currentUser = useSelector(selectIsAuthorisedUser);

    useEffect(() => {
        (async () => {
            try {
                setIsLoadingPosts(true);
                const customPosts: ICustomPost[] = await loadApiPosts(selectedUserId);
                setPosts(customPosts);
            } catch (error) {
                dispatch(showErrorMessage(error));
            } finally {
                setIsLoadingPosts(false);
            }

        })()
    }, [dispatch, selectedUserId]);

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