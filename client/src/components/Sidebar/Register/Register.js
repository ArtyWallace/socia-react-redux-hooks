import React, { useState } from 'react';
import classes from './Register.module.scss';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/actions/actions';

export const Register = ({ setRegisterModal }) => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: '',
        password: '',
        fullname: '',
        city: '',
        country: ''
    });

    const inputChangeHandler = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const registerHandler = event => {
        event.preventDefault();
        dispatch(createUser(user));
        setRegisterModal(false);
        setUser({
            email: '',
            password: '',
            fullname: '',
            city: '',
            country: ''
        });
    }

    return (
        <div className={classes.Register} >
            <div className={classes.Register__modal}>
                <form>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' value={user.email} onChange={inputChangeHandler} />
                    <label htmlFor='password'>Пароль</label>
                    <input id='password' name='password' value={user.password} onChange={inputChangeHandler} />
                    <label htmlFor='fullname'>Полное имя</label>
                    <input id='fullname' name='fullname' value={user.fullname} onChange={inputChangeHandler} />
                    <label htmlFor='city'>Город</label>
                    <input id='city' name='city' value={user.city} onChange={inputChangeHandler} />
                    <label htmlFor='country'>Страна</label>
                    <input id='country' name='country' value={user.country} onChange={inputChangeHandler} />
                    <div>
                        <button onClick={registerHandler} >Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
    )
}