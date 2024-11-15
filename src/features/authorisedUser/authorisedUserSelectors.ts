import { TRootState } from "../../app/store";

export const selectIsAuthorisedFlag = (state: TRootState) => state.authorisedUser.isAuthorised