import { CREATE_POST, FOLLOW, UNFOLLOW, SET_USERS } from "./types";
import Axios from "axios";

// Posts
export const createPost = post => ({ type: CREATE_POST, payload: post });

// Users
export const follow = userId => ({ type: FOLLOW, payload: userId });
export const unfollow = userId => ({ type: UNFOLLOW, payload: userId });
// export const setUsers = users => ({ type: SET_USERS, payload: users });

export const setUsers = () => {
    return async dispatch => {
        const data = await Axios.get('https://social-network.samuraijs.com/api/1.0/users');
        dispatch({ type: SET_USERS, payload: data.data.items });
    }
}