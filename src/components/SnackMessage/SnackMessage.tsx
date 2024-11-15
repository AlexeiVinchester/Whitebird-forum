import ReactDOM from "react-dom";
import { Alert, Snackbar } from "@mui/material";
import { useSnackMessage } from "./useSnackMessage";

const SnackMessage = () => {
    const {
        isOpen,
        message,
        severity,
        handleClose,
        portalContainer
    } = useSnackMessage();

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