import { useState, useCallback } from "react";

export const useComments = () => {
    const [isShowComments, setIsShowComments] = useState(false);

    const handleClickComments = useCallback(async () => {
        setIsShowComments(!isShowComments);
    }, [isShowComments]);

    return { isShowComments, handleClickComments };
};