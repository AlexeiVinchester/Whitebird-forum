import { Typography, Divider } from "@mui/material";
import { IInfoSection } from "../../types/userInfo.interface";
import { InfoSectionItem } from "../InfoSectionItem/InfoSectionItem";

const UserInfoSection = ({ title, items }: IInfoSection) => {
    return (
        <div className="flex flex-col mb-2">
            <Typography variant="h6" component="p" fontSize={18}>
                {title}:
            </Typography>
            <Divider className="!mb-1" />
            {items.map((item, index) => (
                <InfoSectionItem
                    key={index}
                    icon={item.icon}
                    value={item.value}
                />
            ))}
        </div>
    );
};

export { UserInfoSection };
