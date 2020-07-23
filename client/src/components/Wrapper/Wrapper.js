import React from 'react';
import classes from './Wrapper.module.scss';

export const Wrapper = ({ children }) => (
    <div className={classes.Wrapper}>
        { children }
    </div>
)