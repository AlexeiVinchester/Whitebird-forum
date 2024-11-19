import { useCallback, useState } from "react";

export const useFullUserInfo = () => {
    const [showFullInfo, setShowFullInfo] = useState(false);

    const handleClickShowFullInfo = useCallback(() => {
        setShowFullInfo(!showFullInfo);
    }, [showFullInfo]);

    return { showFullInfo, handleClickShowFullInfo };
};