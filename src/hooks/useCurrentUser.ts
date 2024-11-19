import { useSelector } from "react-redux";
import { selectAuthorisedUser } from "../features/authorisedUser/authorisedUserSelectors";

export const useCurrentUser = () => useSelector(selectAuthorisedUser);
