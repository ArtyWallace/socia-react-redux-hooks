import React, { useEffect } from 'react';
import classes from './Users.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { User } from './User/User';
import { setUsers } from '../../redux/actions/actions';

export const Users = () => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUsers());
    }, [dispatch, users.length]);

    useEffect(() => {

        console.log(users);
    })

    return (
        <div className={classes.Users}>
            {
                users.map(user => <User key={user._id} user={user} />)
            }
        </div>
    )
}