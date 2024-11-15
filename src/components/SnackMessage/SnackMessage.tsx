import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackMessage } from "../../features/snackMessage/snackMessageSlice";
import ReactDOM from "react-dom";
import { selectSnackMessage } from "../../features/snackMessage/snackMessageSelectors";

const SnackMessage = () => {
    const dispatch = useDispatch();
    const { isOpen, message, severity } = useSelector(selectSnackMessage);

    const handleClose = () => {
        dispatch(hideSnackMessage());
    };

    const portalContainer = document.getElementById('snackBar-portal');
    if (!portalContainer) {
        return null;
    }

    return ReactDOM.createPortal(
        <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>,
        portalContainer
    );
};

export { SnackMessage };