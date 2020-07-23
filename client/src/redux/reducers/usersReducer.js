import { FOLLOW, UNFOLLOW, SET_USERS, REGISTER } from "../actions/types";

const initialState = {
    users: 
    [
        // { id: 1, photo: 'https://placehold.it/50x50',
        //     fullName: 'Arty Wallace', location: { city: 'Saint-Petersburg', country: 'Russia' }, followed: true },
        // { id: 2, photo: 'https://placehold.it/50x50',
        //     fullName: 'Artem Prudnikov', location: { city: 'Moscow', country: 'Russia' }, followed: false }
    ]
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            };
        case REGISTER:
            return { ...state, users: [...state.users, action.payload] };
        case SET_USERS:
            return { ...state, users: [...action.payload] };
        default:
            return state;
    }
}