import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthorisedFlag } from "../../features/authorisedUser/authorisedUserSelectors";
import { ROUTES } from "../../router/routes";

interface IAuthProvider {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: IAuthProvider) => {
    const location = useLocation();
    const isAuthorised = useSelector(selectIsAuthorisedFlag);
    
    if (!isAuthorised) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }

    return children;
};

export { AuthProvider };