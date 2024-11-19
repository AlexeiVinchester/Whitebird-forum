import { Avatar, CardHeader } from "@mui/material";
import { iconMap } from "../../share/iconsMap";

interface IUserCardHeader {
    name: string;
    userName: string;
    isAdmin: boolean | undefined;
}

const UserCardHeader = ({ name, userName, isAdmin }: IUserCardHeader) => {
    return (
        <CardHeader
            avatar={
                <Avatar
                    src="/assets/avatar.png"
                    className="!w-20 !h-20"
                />
            }
            title={
                <div className="text-blue-700">
                    <h3 className="text-3xl font-bold  flex items-center gap-2">
                        {name}
                    </h3>
                    <p className="text-sm">{userName}</p>
                </div>
            }
            subheader={
                <div className="text-admin-icon flex items-center">
                    {isAdmin &&
                        <>
                            {iconMap.admin}
                            <span className="text-lg font-medium">Admin</span>
                        </>
                    }
                </div>
            }
        />
    );
};

export { UserCardHeader }; 
