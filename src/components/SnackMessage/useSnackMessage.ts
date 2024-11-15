import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSnackMessage } from "../../features/snackMessage/snackMessageSelectors";
import { hideSnackMessage } from "../../features/snackMessage/snackMessageSlice";

export const useSnackMessage = () => {
    const dispatch = useDispatch();
    const { isOpen, message, severity } = useSelector(selectSnackMessage);
    const portalContainer = useMemo(() => document.getElementById('snackBar-portal'), []);

    const handleClose = useCallback(() => {
        dispatch(hideSnackMessage());
    }, [dispatch]);

    return { isOpen, message, severity, handleClose, portalContainer };
};