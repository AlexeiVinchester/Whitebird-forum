import { useState, useCallback } from "react";
import { IApiUser } from "../../types/user.interface";
import { useUserInfoContext } from "../UserCard/useUserInfoContext";
import { generateTextFieldInfo } from "../../utils/editUserFormHelpers";

export const useEditUser = () => {
    const { editUser, userInfo, close } = useUserInfoContext();
    const [updatedUserInfo, setUpdatedUserInfo] = useState(userInfo);
    const fields = generateTextFieldInfo(updatedUserInfo);

    const handleClickSave = () => {
        editUser(updatedUserInfo);
        close();
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUpdatedUserInfo((prev: IApiUser) => {
            switch (e.target.name) {
                case 'address.street':
                case 'address.suite':
                case 'address.city':
                case 'address.zipcode':
                    return {
                        ...prev,
                        address: {
                            ...prev.address,
                            [e.target.name.split('.').at(-1) as string]: e.target.value
                        }
                    };
                    break;
                case 'address.geo.lat':
                case 'address.geo.lng':
                    return {
                        ...prev,
                        address: {
                            ...prev.address,
                            geo: {
                                ...prev.address.geo,
                                [e.target.name.split('.').at(-1) as string]: e.target.value
                            }
                        }

                    }
                    break;
                case 'company.catchPhrase':
                case 'company.bs':
                case 'company.name':
                    return {
                        ...prev,
                        company: {
                            ...prev.company,
                            [e.target.name.split('.').at(-1) as string]: e.target.value
                        }
                    }
                    break;
                default:
                    return {
                        ...prev,
                        [e.target.name]: e.target.value
                    };
            }
        });
    }, []);

    return { handleClickSave, handleChange, updatedUserInfo, fields };
};