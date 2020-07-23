import React from 'react';
import classes from './Sidebar.module.scss';
import { Account } from './Account/Account';
import { Menu } from './Menu/Menu';

export const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <Account />
            <Menu />
        </div>
    )
}