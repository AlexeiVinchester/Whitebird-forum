import { Card, CardHeader, Avatar, Divider, CardActions, IconButton, CardContent, Typography } from "@mui/material";
import { ICustomUser } from "../../types/user.interface";
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StreetviewIcon from '@mui/icons-material/Streetview';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InboxIcon from '@mui/icons-material/Inbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HelpIcon from '@mui/icons-material/Help';
interface IUserCard {
    user: ICustomUser;
};

const UserCard = ({ user }: IUserCard) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const isProfilePage = pathname === '/profile';

    const handleClickLogOut = () => {
        dispatch(logOutAuthorisedUser());
    };

    const [showFullInfo, setShowFullInfo] = useState(false);

    const handleClickShowFullInfo = () => {
        setShowFullInfo(!showFullInfo);
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
            <StyledIconButton
                onClick={handleClickShowFullInfo}
                clickFlag={showFullInfo}
                value={showFullInfo ? 'Hide full info' : 'Show full info'}
            >
                {showFullInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </StyledIconButton>

            {showFullInfo &&
                <CardContent>
                    <div className="flex flex-col mb-2">
                        <Typography variant="h6" component="p" fontSize={18}>
                            Personal contacts:
                        </Typography>
                        <Divider className="!mb-1" />
                        <div className="flex items-center">
                            <EmailIcon />
                            <span className="ml-2">{user.email}</span>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon />
                            <span className="ml-2">{user.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <LanguageIcon />
                            <span className="ml-2">{user.website}</span>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <Typography variant="h6" component="p" fontSize={18}>
                            Adress:
                        </Typography>
                        <Divider className="!mb-1" />
                        <div className="flex items-center">
                            <StreetviewIcon />
                            <span className="ml-2">{user.address.street}</span>
                        </div>
                        <div className="flex items-center">
                            <ApartmentIcon />
                            <span className="ml-2">{user.address.suite}</span>
                        </div>
                        <div className="flex items-center">
                            <LocationCityIcon />
                            <span className="ml-2">{user.address.city}</span>
                        </div>
                        <div className="flex items-center">
                            <InboxIcon />
                            <span className="ml-2">{user.address.zipcode}</span>
                        </div>
                        <div className="flex items-center">
                            <LocationOnIcon />
                            <span className="ml-2">
                                lat: {user.address.geo.lat}, lng: {user.address.geo.lng}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <Typography variant="h6" component="p" fontSize={18}>
                            Company:
                        </Typography>
                        <Divider className="!mb-1" />
                        <div className="flex items-center">
                            <BusinessIcon />
                            <span className="ml-2">{user.company.name}</span>
                        </div>
                        <div className="flex items-center">
                            <MicNoneIcon />
                            <span className="ml-2">{user.company.catchPhrase}</span>
                        </div>
                        <div className="flex items-center">
                            <HelpIcon />
                            <span className="ml-2">{user.company.bs}</span>
                        </div>
                    </div>
                </CardContent>
            }
            <Divider />
            <CardActions>
                <div className="w-full flex flex-row justify-between items-center">
                    <IconButton
                        title='Edit'
                        onClick={handleEdit}
                    >
                        <EditIcon className="text-basic-color" />
                    </IconButton>
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
