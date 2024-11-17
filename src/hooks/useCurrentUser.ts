import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../features/authorisedUser/authorisedUserSelectors";

export const useCurrentUser = () => useSelector(selectIsAuthorisedUser);
