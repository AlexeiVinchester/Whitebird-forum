import { UserCard } from "../../components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { StyledIconButton } from "../../components/StyledIconButton/StyledIconButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { iconMap } from "../../share/iconsMap";
import { ROUTES } from "../../router/routes";

const ProfilePage = () => {
    const user = useCurrentUser();
    const navigate = useNavigate();

    const hadleClickAllUsers = () => navigate(ROUTES.USERS, { state: user.isAdmin });

    return (
        <>
            {user.isAdmin &&
                <StyledIconButton
                    onClick={hadleClickAllUsers}
                    value="All users"
                    clickFlag
                >
                    {iconMap.allUsersPage}
                </StyledIconButton>
            }
            <UserCard user={user} />
        </>

    );
};

export { ProfilePage };
