import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

interface IModalWindow {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const ModalWindow = ({ isOpen, onClose, children }: IModalWindow) => {
    if (!isOpen) return null;

    return (
        <Dialog open={isOpen}>
            <IconButton
                className="!absolute right-2 top-2 !text-basic-color"
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>
            {children}
        </Dialog>
    );
};

export { ModalWindow }; 
