import { useModal } from "../../hooks/useModal";
import { ModalWindow } from "../../layouts/ModalWindow/ModalWindow";
import { IApiUser } from "../../types/user.interface";
import { EditUserInfoFrom } from "../EditUserInfoForm/EditUserInfoFrom";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import EditIcon from '@mui/icons-material/Edit';
import { UserInfoContext } from "../UserCard/useUserInfoContext";

interface IEditPostButton {
    userInfo: IApiUser;
    setUserInfo: React.Dispatch<React.SetStateAction<IApiUser>>
};

const EditPostButton = ({ userInfo, setUserInfo }: IEditPostButton) => {

    const { isOpen, open, close } = useModal();

    const editUser = (user: IApiUser) => {
        setUserInfo({
            ...user,
            company: { ...user.company },
            address: {
                ...user.address,
                geo: { ...user.address.geo }
            }
        });
    }
    const handleClickEdit = () => {
        open()
    };
    return (
        <>
            <StyledIconButton
                value='Edit info'
                onClick={handleClickEdit}
                clickFlag
            >
                <EditIcon />
            </StyledIconButton>
            <UserInfoContext.Provider value={{ editUser, userInfo, close }}>
                <ModalWindow isOpen={isOpen} onClose={close}>
                    <EditUserInfoFrom />
                </ModalWindow>
            </UserInfoContext.Provider>

        </>
    );
};

export { EditPostButton };


