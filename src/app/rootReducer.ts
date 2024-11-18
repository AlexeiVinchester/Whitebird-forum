import { combineReducers } from "redux";
import authorisedUserSlice from "../features/authorisedUser/authorisedUserSlice";
import snackMessageSlice from "../features/snackMessage/snackMessageSlice"
import modalWindowSlice from "../features/modalWindow/modalWindowSlice";

export const rootReducer = combineReducers({
    authorisedUser: authorisedUserSlice,
    snackMessage: snackMessageSlice,
    modalWindow: modalWindowSlice
});