import { useState } from "react";
import { ICustomUser, IApiUser } from "../../types/user.interface";
import { structureUserInfo } from "../../utils/usersHeplers";

export const useStructuredUserInfo = (user: ICustomUser) => {
    const [userInfo, setUserInfo] = useState<IApiUser>(user);
    const structuredUserInfo = structureUserInfo(userInfo);

    return { userInfo, setUserInfo, structuredUserInfo };
};