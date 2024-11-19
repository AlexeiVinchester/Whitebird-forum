import { useLocation } from "react-router-dom";

export const useCheckProfilePage = () => {
    const { pathname } = useLocation();
    const isProfilePage = pathname === '/profile';

    return isProfilePage;
};