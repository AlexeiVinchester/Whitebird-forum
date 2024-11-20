import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthorisedFlag } from "../../features/authorisedUser/authorisedUserSelectors";
import { ROUTES } from "../../router/routes";

interface IUnAuthProvider {
    children: React.ReactNode;
};

const UnAuthProvider = ({ children }: IUnAuthProvider) => {
    const isAuthorised = useSelector(selectIsAuthorisedFlag);

    if (isAuthorised) {
        return <Navigate to={ROUTES.PROFILE} />
    }

    return children;
};

export { UnAuthProvider };