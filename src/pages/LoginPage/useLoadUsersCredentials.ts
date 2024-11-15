import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IApiUser } from "../../types/user.interface";
import { showErrorMessage } from "../../utils/snackMessageHelpers";
import { loadUsersData } from "./loginPage.service";

export const useLoadUsersCredentials = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiUsers, setUsers] = useState<IApiUser[] | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!apiUsers) {
            (async () => {
                try {
                    const users = await loadUsersData();
                    setUsers(users);
                } catch (error) {
                    dispatch(showErrorMessage(error))
                } finally {
                    setIsLoading(false);
                }

            })();
        }
    }, [apiUsers, dispatch]);

    return { isLoading, apiUsers };
};