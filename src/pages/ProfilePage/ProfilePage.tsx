import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { UserCard } from "../../components/UserCard/UserCard";

const ProfilePage = () => {
    const user = useSelector(selectIsAuthorisedUser);
   
    return (
        <UserCard user={user}/>
    );
};

export { ProfilePage };
