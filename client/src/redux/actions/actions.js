import { CREATE_POST, FOLLOW, UNFOLLOW, SET_USERS, REGISTER } from "./types";
import Axios from "axios";

// Posts
export const createPost = post => ({ type: CREATE_POST, payload: post });

// Users
export const follow = userId => ({ type: FOLLOW, payload: userId });
export const unfollow = userId => ({ type: UNFOLLOW, payload: userId });
// export const setUsers = users => ({ type: SET_USERS, payload: users });

export const setUsers = () => {
    return async dispatch => {
        try {
            const data = await Axios.get('http://localhost:5000/api/users');
            dispatch({ type: SET_USERS, payload: data.data.users });
        } catch (err) {}
    }
}

export const createUser = user => {
    return async dispatch => {
        try {
            const data = await Axios.post('http://localhost:5000/api/auth/register', user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(data);
            dispatch({ type: REGISTER, payload: data });
        } catch (err) {}
    }
}