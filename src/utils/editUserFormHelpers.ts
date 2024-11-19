import { ITextFieldInfo } from "../types/textFieldInfo";
import { IApiUser } from "../types/user.interface";

export const generateTextFieldInfo = (data: IApiUser, parentKey = ''): ITextFieldInfo[] => {
    const fields: ITextFieldInfo[] = [];

    Object.entries(data).forEach(([key, value]) => {
        if (['id', 'isAdmin', 'isAuthorised'].includes(key)) {
            return;
        }

        const fieldName = parentKey ? `${parentKey}.${key}` : key;

        if (typeof value === 'object' && value !== null) {
            fields.push(...generateTextFieldInfo(value, fieldName));
        } else {
            fields.push({
                label: `Enter ${key}`,
                name: fieldName,
                defaultValue: value,
            });
        }
    });

    return fields;
};