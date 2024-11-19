import { combineReducers } from "redux";
import authorisedUserSlice from "../features/authorisedUser/authorisedUserSlice";
import snackMessageSlice from "../features/snackMessage/snackMessageSlice"

export const rootReducer = combineReducers({
    authorisedUser: authorisedUserSlice,
    snackMessage: snackMessageSlice
});