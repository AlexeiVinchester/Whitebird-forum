import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useCurrentUser } from "../../hooks/useCurrentUser";

interface IAuthProvider {
    children: React.ReactNode;
};

const AdminProvider = ({ children }: IAuthProvider) => {
    const { isAdmin } = useCurrentUser();
    const location = useLocation();

    if (!isAdmin) {
        return <Navigate to={ROUTES.PROFILE} state={{ from: location }} />;
    }

    return children;
};

export { AdminProvider };