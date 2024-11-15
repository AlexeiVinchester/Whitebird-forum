import { useLocation, useNavigate } from "react-router-dom";

export const useNavigationBack = () => {
    const location = useLocation();
    const fromPagePath = location.state?.from?.pathname || '/profile';

    const navigate = useNavigate();

    const navigateBack = (path: string, replace: boolean = true) => {
        navigate(path, { replace });
    };

    return { fromPagePath, navigateBack };
};