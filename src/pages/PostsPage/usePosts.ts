import { useState } from "react";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";

export const useSelectedUsers = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const { isLoading: isLoadingUsers, apiData: apiUsers } = useLoadData(loadApiUsers);

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUserId(+e.target.value || null);
    };

    return {
        handleChangeSelect,
        selectedUserId,
        isLoadingUsers,
        apiUsers
    };
};