import { Card, Divider, CardActions, CardContent } from "@mui/material";
import { IApiUser, ICustomUser } from "../../types/user.interface";
import { logOutAuthorisedUser } from "../../features/authorisedUser/authorisedUserSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { EditPostButton } from "../EditPostButton/EditPostButton";
import { iconMap } from "../../share/iconsMap";
import { structureUserInfo } from "../../utils/usersHeplers";
import { UserInfoSection } from "../UserInfoSection/UserInfoSection";
import { UserCardHeader } from "../UserCardHeader/UserCardHeader";

interface IUserCard {
    user: ICustomUser;
};

const UserCard = ({ user }: IUserCard) => {
    const [userInfo, setUserInfo] = useState<IApiUser>(user);
    const structuredUserInfo = structureUserInfo(userInfo);

    const { pathname } = useLocation();
    const isProfilePage = pathname === '/profile';
    
    const dispatch = useDispatch();
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
            className="!w-[70%] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
        >
            <UserCardHeader name={userInfo.name} userName={userInfo.username} isAdmin={user.isAdmin} />
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
                        Object.values(structuredUserInfo).map((section, index) => (
                            <UserInfoSection
                                key={index}
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
                    <EditPostButton 
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                    />
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
