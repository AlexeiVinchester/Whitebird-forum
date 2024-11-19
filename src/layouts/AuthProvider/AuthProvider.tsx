import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthorisedFlag } from "../../features/authorisedUser/authorisedUserSelectors";

interface IAuthProvider {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: IAuthProvider) => {
    const location = useLocation();
    const isAuthorised = useSelector(selectIsAuthorisedFlag);
    if (!isAuthorised) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
};

export { AuthProvider } 