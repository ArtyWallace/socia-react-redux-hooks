import React, { useContext } from 'react';
import classes from './Sidebar.module.scss';
import { Account } from './Account/Account';
import { Menu } from './Menu/Menu';
import { Auth } from './Auth/Auth';
import { AuthContext } from '../../context/AuthContext';

export const Sidebar = () => {
    const isAuth = useContext(AuthContext);

    return (
        <div className={classes.Sidebar}>
            {
                isAuth
                ? <Account />
                : <Auth />
            }
            <Menu />
        </div>
    )
}