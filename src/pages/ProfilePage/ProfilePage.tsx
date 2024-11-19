import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { UserCard } from "../../components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { StyledIconButton } from "../../components/StyledIconButton/StyledIconButton";
import GroupIcon from '@mui/icons-material/Group';

const ProfilePage = () => {
    const user = useSelector(selectIsAuthorisedUser);
    const navigate = useNavigate();

    const hadleClickAllUsers = () => navigate('/users', {state: user.isAdmin});

    return (
        <>
            <StyledIconButton
                onClick={hadleClickAllUsers}
                value="All users"
                clickFlag
            >
                <GroupIcon />
            </StyledIconButton>
            <UserCard user={user} />
        </>

    );
};

export { ProfilePage };
