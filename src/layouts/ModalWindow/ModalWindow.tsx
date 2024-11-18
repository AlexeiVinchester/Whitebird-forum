import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IModalWindow {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
};

const ModalWindow = ({ isOpen, closeModal, children }: IModalWindow) => {

    return (
        <Dialog open={isOpen} onClose={closeModal}>
            <IconButton sx={{ position: 'absolute', right: '5px', top: '5px' }} onClick={closeModal} ><CloseIcon /></IconButton>
        
            {children}
        </Dialog>
    );
};

export { ModalWindow }; 
