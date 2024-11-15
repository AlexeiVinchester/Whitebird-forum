import { combineReducers } from "redux";
import authorisedUserSlice from "../features/authorisedUser/authorisedUserSlice";

export const rootReducer = combineReducers({
    authorisedUser: authorisedUserSlice
})