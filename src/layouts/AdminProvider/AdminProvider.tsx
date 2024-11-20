import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { showErrorMessage } from "../../utils/snackMessageHelpers";

interface IAuthProvider {
    children: React.ReactNode;
};

const AdminProvider = ({ children }: IAuthProvider) => {
    const { isAdmin } = useCurrentUser();
    const location = useLocation();
    const dispatch = useDispatch();

    if (!isAdmin) {
        dispatch(showErrorMessage(new Error('Fobidden! Only Admin can visit users!')));

        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }

    return children;
};

export { AdminProvider };