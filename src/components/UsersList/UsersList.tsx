import { useCurrentUser } from "../../hooks/useCurrentUser";
import { ICustomUser } from "../../types/user.interface";
import { UserCard } from "../UserCard/UserCard";

interface IUsersList {
    users: ICustomUser[];
};

const UsersList = ({ users }: IUsersList) => {
    const { id: currentUserId } = useCurrentUser();
    return (
        <>
            {
                users.map(user => {
                    return currentUserId === user.id ?
                        null :
                        <UserCard
                            key={user.id}
                            user={user} />
                })
            }
        </>
    );
};

export { UsersList };