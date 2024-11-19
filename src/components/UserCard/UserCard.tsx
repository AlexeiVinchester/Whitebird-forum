import { Card, CardHeader, Avatar, Divider, CardActions, CardContent } from "@mui/material";
import { ICustomUser } from "../../types/user.interface";
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { EditPostButton } from "../EditPostButton/EditPostButton";
import { iconMap } from "../../share/iconsMap";
import { structureUserInfo } from "../../utils/usersHeplers";
import { UserInfoSection } from "../UserInfoSection/UserInfoSection";

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

    const userInfo = useMemo(() => structureUserInfo(user), [user]);

    return (
        <Card
            variant="outlined"
            className="!w-[70%] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
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
                    {
                        Object.values(userInfo).map(section => (
                            <UserInfoSection
                                key={section.title}
                                title={section.title}
                                items={section.items}
                            />
                        ))
                    }
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
