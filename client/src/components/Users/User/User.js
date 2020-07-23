import React from 'react';
import classes from './User.module.scss';
import { useDispatch } from 'react-redux';
import { follow, unfollow } from '../../../redux/actions/actions';

export const User = ({ user }) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.User}>
            
            <img src={user.photo} alt={user.fullName} />
            <div className={classes.User__info} >
                <div>{user.fullname}</div>
                <div>{user.city}</div>
            </div>
            {
                user.followed 
                ? <button 
                    className={classes.followed}
                    onClick={() => dispatch(unfollow(user.id))}
                >Вы подписаны</button>
                : <button 
                    className={classes.unfollowed}
                    onClick={() => dispatch(follow(user.id))}
                >Подписаться</button>
            }
        </div>
    )
}