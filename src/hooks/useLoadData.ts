import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TLoaderData } from "../types/loaderOfData.type";
import { showErrorMessage } from "../utils/snackMessageHelpers";

export const useLoadData = <T, P = void>(loaderData: TLoaderData<T[], P>, params?: P) => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState<T[] | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('run effect');
        (async () => {
            try {
                setIsLoading(true);
                const data = await loaderData(params);
                setApiData(data);
            } catch (error) {
                dispatch(showErrorMessage(error))
            } finally {
                setIsLoading(false);
            }

        })();
    }, [dispatch, loaderData, params]);

    return { isLoading, apiData, dispatch };
};