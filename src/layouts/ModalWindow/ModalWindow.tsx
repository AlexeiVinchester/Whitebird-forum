import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../../app/store";
import { closeModalWindow } from "../../features/modalWindow/modalWindowSlice";

const ModalWindow = () => {
    const { isOpen, element } = useSelector((state: TRootState) => state.modalWindow);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModalWindow());

    if (!isOpen) return null;
    return (
        <Dialog open={isOpen}>
            <IconButton
                className="!absolute right-2 top-2 !text-basic-color"
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>

            {element}
        </Dialog>
    );
};

export { ModalWindow }; 
