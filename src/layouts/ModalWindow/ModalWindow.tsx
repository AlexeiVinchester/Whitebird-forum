import { Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { closeModalWindow } from "../../features/modalWindow/modalWindowSlice";
import { AddPostForm } from "../../components/AddPostForm/AddPostForm";
import { selectModalWindow } from "../../features/modalWindow/modalWindowSelectors";

const ModalWindow = () => {
    const { isOpen, type, data } = useSelector(selectModalWindow);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModalWindow());

    if (!isOpen) return null;

    let content;
    switch (type) {
        case 'ADD_POST':
            if (!data || type !== 'ADD_POST') return null;
            content = (
                <AddPostForm
                    lastPostId={data.lastPostId}
                    selectedUserId={data.selectedUserId}
                />
            );
            break;
        default:
            content = null;
    }

    return (
        <Dialog open={isOpen}>
            <IconButton
                className="!absolute right-2 top-2 !text-basic-color"
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
            {content}
        </Dialog>
    );
};

export { ModalWindow }; 
