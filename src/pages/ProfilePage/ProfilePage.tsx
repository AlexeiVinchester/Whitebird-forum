import { Card, Divider, CardActions, IconButton, Avatar, CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import LogoutIcon from '@mui/icons-material/Logout';
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import EditIcon from '@mui/icons-material/Edit';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const ProfilePage = () => {
    const user = useSelector(selectIsAuthorisedUser);
    const dispatch = useDispatch();

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
                    <IconButton
                        title='Edit'
                        onClick={handleEdit}
                    >
                        <EditIcon className="text-basic-color" />
                    </IconButton>
                    <IconButton
                        title='Log out'
                        onClick={handleClickLogOut}
                    >
                        <LogoutIcon className="text-basic-color" />
                    </IconButton>
                </div>

            </CardActions>
        </Card>
    );
};

export { ProfilePage } 
