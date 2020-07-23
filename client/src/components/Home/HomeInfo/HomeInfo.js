import React from 'react';
import classes from './HomeInfo.module.scss';

export const HomeInfo = () => {
    return (
        <div className={classes.Homeinfo}>
            <span>Город:</span>
            <span>Возраст:</span>
            <span>О себе:</span>
        </div>
    )
}