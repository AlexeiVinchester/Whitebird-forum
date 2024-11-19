import { ICustomUser } from "../../types/user.interface";
import { UserCard } from "../UserCard/UserCard";

interface IUsersList {
    users: ICustomUser[];
};

const UsersList = ({ users }: IUsersList) => {
    return (
        <>
            {
                users.map(user => (
                    <UserCard
                        key={user.id}
                        user={user} />
                ))
            }
        </>
    );
};

export { UsersList };