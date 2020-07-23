import React from 'react';
import classes from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
    return (
        <div className={classes.Menu}>
            <div className={classes.Menu__items} >
                <NavLink to='/' exact className={classes.Menu__item} activeClassName={classes.active} >
                    <i className='fas fa-home' />
                    <span>Главная</span>
                </NavLink>
                <NavLink to='/messages' className={classes.Menu__item} activeClassName={classes.active}>
                    <i className='far fa-envelope' />
                    <span>Сообщения</span>
                </NavLink>
                <NavLink to='/users' className={classes.Menu__item} activeClassName={classes.active}>
                    <i className='fas fa-address-book' />
                    <span>Пользователи</span>
                </NavLink>
                <div className={classes.Menu__item}>
                    <i className='far fa-bell' />
                    <span>Уведомления</span>
                </div>
                <div className={classes.Menu__item}>
                    <i className='far fa-calendar-plus' />
                    <span>Календарь</span>
                </div>
                <div className={classes.Menu__item}>
                    <i className='fas fa-cog' />
                    <span>Настройки</span>
                </div>
            </div>
            <div className={classes.Menu__button}>
                <i className='fas fa-power-off' />
                <span>Выход</span>
            </div>
        </div>
    )
}