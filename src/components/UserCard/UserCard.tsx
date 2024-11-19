import { Card, CardHeader, Avatar, Divider, CardActions, CardContent, Typography } from "@mui/material";
import { ICustomUser } from "../../types/user.interface";
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { EditPostButton } from "../EditPostButton/EditPostButton";
import { iconMap } from "../../share/iconsMap";

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
                    <div className="text-blue-700">
                        <h3 className="text-3xl font-bold  flex items-center gap-2">
                            {user.name}
                        </h3>
                        <p className="text-sm">{user.username}</p>
                    </div>}
                subheader={
                    <div className="text-admin-icon flex items-center">{user.isAdmin && (
                        <>
                            {iconMap.admin}
                            <span className="text-lg font-medium">Admin</span>
                        </>
                    )}</div>
                }
            />
            <StyledIconButton
                onClick={handleClickShowFullInfo}
                clickFlag={showFullInfo}
                value={showFullInfo ? 'Hide full info' : 'Show full info'}
            >
                {showFullInfo ? iconMap.hideFullInfo : iconMap.showFullInfo}
            </StyledIconButton>

            {showFullInfo &&
                <CardContent>
                    <div className="flex flex-col mb-2">
                        <Typography variant="h6" component="p" fontSize={18}>
                            Personal contacts:
                        </Typography>
                        <Divider className="!mb-1" />
                        <div className="flex items-center">
                            {iconMap.email}
                            <span className="ml-2">{user.email}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.phone}
                            <span className="ml-2">{user.phone}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.website}
                            <span className="ml-2">{user.website}</span>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <Typography variant="h6" component="p" fontSize={18}>
                            Adress:
                        </Typography>
                        <Divider className="!mb-1" />
                        <div className="flex items-center">
                            {iconMap.street}
                            <span className="ml-2">{user.address.street}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.suite}
                            <span className="ml-2">{user.address.suite}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.city}
                            <span className="ml-2">{user.address.city}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.zipcode}
                            <span className="ml-2">{user.address.zipcode}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.geo}
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
                            {iconMap.companyName}
                            <span className="ml-2">{user.company.name}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.companyCatchPhrase}
                            <span className="ml-2">{user.company.catchPhrase}</span>
                        </div>
                        <div className="flex items-center">
                            {iconMap.companyBs}
                            <span className="ml-2">{user.company.bs}</span>
                        </div>
                    </div>
                </CardContent>
            }
            <Divider />
            <CardActions>
                <div className="w-full flex flex-row justify-between items-center">
                    <EditPostButton />
                    {isProfilePage &&
                        <StyledIconButton
                            value='Log out'
                            onClick={handleClickLogOut}
                            clickFlag
                        >
                            {iconMap.logOut}
                        </StyledIconButton>
                    }
                </div>
            </CardActions>
        </Card>
    );
};

export { UserCard };
