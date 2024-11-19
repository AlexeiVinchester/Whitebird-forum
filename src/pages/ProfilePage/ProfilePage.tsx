import { UserCard } from "../../components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { StyledIconButton } from "../../components/StyledIconButton/StyledIconButton";
import GroupIcon from '@mui/icons-material/Group';
import { useCurrentUser } from "../../hooks/useCurrentUser";

const ProfilePage = () => {
    const user = useCurrentUser();
    const navigate = useNavigate();

    const hadleClickAllUsers = () => navigate('/users', { state: user.isAdmin });

    return (
        <>
            {user.isAdmin &&
                <StyledIconButton
                    onClick={hadleClickAllUsers}
                    value="All users"
                    clickFlag
                >
                    <GroupIcon />
                </StyledIconButton>
            }

            <UserCard user={user} />
        </>

    );
};

export { ProfilePage };
