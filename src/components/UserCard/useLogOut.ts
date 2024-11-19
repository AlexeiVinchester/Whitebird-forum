import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";

export const useLogOut = () => {
    const dispatch = useDispatch();

    const handleClickLogOut = useCallback(() => {
        dispatch(logOutAuthorisedUser());
    }, [dispatch]);

    return handleClickLogOut;
};