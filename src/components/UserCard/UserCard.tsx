import { Card, CardHeader, Avatar, Divider, CardActions, IconButton } from "@mui/material";
import { ICustomUser } from "../../types/user.interface";
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { useDispatch } from "react-redux";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useLocation } from "react-router-dom";

interface IUserCard {
    user: ICustomUser;
};

const UserCard = ({ user }: IUserCard) => {
    const dispatch = useDispatch();

    const { id: currentUserId } = useCurrentUser(); 
    const { pathname } = useLocation();

    const isCurrentUserCard = user.id === currentUserId;
    const isProfilePage = pathname === '/profile';

    const handleClickLogOut = () => {
        dispatch(logOutAuthorisedUser());
    };

    const handleEdit = () => {

    };

    return (
        <Card
            variant="outlined"
            sx={{
                width: '90%',
                boxShadow: '0 5px 20px #ABB2B9;',
                borderRadius: '22px'
            }}
            className="relative"
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt={user.username}
                        src="/assets/avatar.png"
                        className="!w-20 !h-20"
                    />
                }
                title={
                    <h3 className="text-3xl font-bold text-blue-700">
                        {user.name}
                        {user.isAdmin && <AdminPanelSettingsIcon className=" text-admin-icon" />}
                    </h3>}
                subheader={<p className="text-sm text-gray-500">{user.username}</p>}
            />
            <Divider />
            <CardActions>
                <div className="w-full flex flex-row justify-between items-center">
                    {
                        ((isCurrentUserCard && isProfilePage) || (!isCurrentUserCard && !isProfilePage)) &&
                        <IconButton
                            title='Edit'
                            onClick={handleEdit}
                        >
                            <EditIcon className="text-basic-color" />
                        </IconButton>
                    }

                    {isProfilePage && <IconButton
                        title='Log out'
                        onClick={handleClickLogOut}
                    >
                        <LogoutIcon className="text-basic-color" />
                    </IconButton>
                    }

                </div>

            </CardActions>
        </Card>
    );
};

export { UserCard };
