import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TLoaderData } from "../types/loaderOfData.type";
import { showErrorMessage } from "../utils/snackMessageHelpers";

export const useLoadData = <T>(loaderData: TLoaderData<T[]>) => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState<T[] | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!apiData) {
            (async () => {
                try {
                    setIsLoading(true);
                    const data = await loaderData();
                    setApiData(data);
                } catch (error) {
                    dispatch(showErrorMessage(error))
                } finally {
                    setIsLoading(false);
                }

            })();
        }
    }, [apiData, dispatch, loaderData]);

    return { isLoading, apiData, dispatch };
};