import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openModalWindow } from "../../features/modalWindow/modalWindowSlice";
import { ICustomPost } from "../../types/post.interface";
import { getMaxPotId } from "../../utils/postsHelpers";
import { IAddNewPostButton } from "./AddNewPostButton";

export const useAddNewPost = ({ setPosts, posts, selectedUserId }: IAddNewPostButton) => {
    const dispatch = useDispatch();

    const addNewPost = useCallback((post: ICustomPost) => {
        setPosts((prev) => [...prev || [], post]);
    }, [setPosts]);

    const handleClickAdd = () => {
        const maxId = getMaxPotId(posts as ICustomPost[]) || 1;
        dispatch(openModalWindow(
            {
                type: 'ADD_POST',
                data: {
                    selectedUserId,
                    lastPostId: maxId,
                }
            }));
    };

    return {
        addNewPost,
        handleClickAdd
    };
};