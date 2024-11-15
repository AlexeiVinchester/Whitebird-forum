import { IAdmin } from "../types/admin.interface";

export const baseDomain: string = import.meta.env.VITE_BASE_URL;
export const admins: IAdmin[] = JSON.parse(import.meta.env.VITE_ADMINS);