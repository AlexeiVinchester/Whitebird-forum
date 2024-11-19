import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import EditIcon from '@mui/icons-material/Edit';

const EditPostButton = () => {
    const handleEdit = () => {

    };
    return (
        <>
            <StyledIconButton
                value='Edit info'
                onClick={handleEdit}
                clickFlag
            >
                <EditIcon />
            </StyledIconButton>
        </>
    );
};

export { EditPostButton }; 
