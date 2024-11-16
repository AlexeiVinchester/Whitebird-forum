import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IApiPost } from "../../types/post.interface";
import { showErrorMessage } from "../../utils/snackMessageHelpers";
import { loadApiPosts } from "./loadApiPosts.service";

export const usePosts = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<IApiPost[] | null>(null);
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                setIsLoadingPosts(true);
                const posts: IApiPost[] = await loadApiPosts(selectedUserId);
                setPosts(posts);
            } catch (error) {
                dispatch(showErrorMessage(error));
            } finally {
                setIsLoadingPosts(false);
            }

        })()
    }, [dispatch, selectedUserId]);

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUserId(+e.target.value || null);
    };

    return { posts, isLoadingPosts, handleChangeSelect, setPosts };
};