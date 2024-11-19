import { ReactNode } from 'react';

export interface IInfoItem {
    icon: ReactNode;
    value: string;
};

export interface IInfoSection {
    title: string;
    items: IInfoItem[];
};

export interface IUserInfo {
    personalContacts: IInfoSection;
    address: IInfoSection;
    company: IInfoSection;
};