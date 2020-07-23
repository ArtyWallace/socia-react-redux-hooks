import React from 'react';
import classes from './Account.module.scss';
import photo from '../../../assets/default-photo.png';

export const Account = () => {
    return (
        <div className={classes.Account}>
            <img className={classes.Account__photo} src={photo} alt='account' />
            <span className={classes.Account__name}>Account name</span>
        </div>
    )
}