import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IModalWindow {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
};

const ModalWindow = ({ isOpen, closeModal, children }: IModalWindow) => {
    return (
        <Dialog open={isOpen}>
            <IconButton
                className="!absolute right-2 top-2 !text-basic-color"
                onClick={closeModal}
            >
                <CloseIcon />
            </IconButton>

            {children}
        </Dialog>
    );
};

export { ModalWindow }; 
