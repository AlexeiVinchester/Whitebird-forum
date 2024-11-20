import { Card, Divider, CardActions, CardContent } from "@mui/material";
import { ICustomUser } from "../../types/user.interface";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { EditPostButton } from "../EditPostButton/EditPostButton";
import { iconMap } from "../../share/iconsMap";
import { UserInfoSection } from "../UserInfoSection/UserInfoSection";
import { UserCardHeader } from "../UserCardHeader/UserCardHeader";
import { useFullUserInfo } from "./useFullUserInfo";
import { useLogOut } from "./useLogOut";
import { useCheckProfilePage } from "./useCheckProfilePage";
import { useStructuredUserInfo } from "./useStructuredUserInfo";

interface IUserCard {
    user: ICustomUser;
};

const UserCard = ({ user }: IUserCard) => {
    const { userInfo, setUserInfo, structuredUserInfo } = useStructuredUserInfo(user);
    const { showFullInfo, handleClickShowFullInfo } = useFullUserInfo();
    const isProfilePage = useCheckProfilePage();
    const handleClickLogOut = useLogOut();

    return (
        <Card
            variant="outlined"
            className="!w-[70%] !min-w-[350px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
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
