import { useState, useCallback } from "react";
import { IApiUser } from "../../types/user.interface";
import { useUserInfoContext } from "../UserCard/useUserInfoContext";

export const useEditUser = () => {
    const { editUser, userInfo, close } = useUserInfoContext();
    const [updatedUserInfo, setUpdatedUserInfo] = useState(userInfo);

    const handleClickSave = () => {
        editUser(updatedUserInfo);
        close();
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUpdatedUserInfo((prev: IApiUser) => {
            switch (e.target.name) {
                case 'street':
                case 'suite':
                case 'city':
                case 'zipcode':
                    return {
                        ...prev,
                        address: {
                            ...prev.address,
                            [e.target.name]: e.target.value
                        }
                    };
                    break;
                case 'lat':
                case 'lng':
                    return {
                        ...prev,
                        address: {
                            ...prev.address,
                            geo: {
                                ...prev.address.geo,
                                [e.target.name]: e.target.value
                            }
                        }

                    }
                    break;
                case 'companyName':
                    return {
                        ...prev,
                        company: {
                            ...prev.company,
                            name: e.target.value
                        }
                    }
                    break;
                case 'catchPhrase':
                case 'bs':
                    return {
                        ...prev,
                        company: {
                            ...prev.company,
                            [e.target.name]: e.target.value
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

    return { handleClickSave, handleChange, updatedUserInfo };
};