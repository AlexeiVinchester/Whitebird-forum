import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { TRootState } from "../../app/store";

interface IAuthProvider {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
    const location = useLocation();
    const isAuthorised = useSelector((state: TRootState) => state.authorisedUser.isAuthorised);
    if (!isAuthorised) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
};

export { AuthProvider } 