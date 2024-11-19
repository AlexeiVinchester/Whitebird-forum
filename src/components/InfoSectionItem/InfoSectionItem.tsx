import { IInfoItem } from "../../types/userInfo.interface";

export const InfoSectionItem = ({ icon, value }: IInfoItem) => {
    return (
        <div className="flex items-center">
            {icon}
            <span className="ml-2">{value}</span>
        </div>
    );
};