import { useState } from "react";
import { useLoadData } from "../../hooks/useLoadData";
import { loadApiUsers } from "../../services/loadApiUsers";
import { IApiUser } from "../../types/user.interface";

export const useSelectedUsers = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const { isLoading: isLoadingUsers, apiData: apiUsers } = useLoadData<IApiUser>(loadApiUsers);

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