import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    posts: postReducer,
    users: usersReducer
});