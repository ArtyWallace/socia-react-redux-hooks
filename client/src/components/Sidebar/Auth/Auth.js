import React, { useState, useContext } from 'react';
import classes from './Auth.module.scss';
import { Register } from '../Register/Register';
import Axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

export const Auth = () => {
    const auth = useContext(AuthContext);
    const [registerModal, setRegisterModal] = useState(false);
    const [authForm, setAuthForm] = useState({
        email: '',
        password: ''
    });


    const inputChangeHandler = event => {
        setAuthForm({
            ...authForm,
            [event.target.name]: event.target.value
        });
    }

    const loginHandler = async event => {
        event.preventDefault();
        try {
            const data = await Axios.post('http://localhost:5000/api/auth/login', authForm,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            auth.login(data.data.token, data.data.userId);
        } catch (err) {}
    }

    const registerModalHandler = event => {
        event.preventDefault();
        setRegisterModal(true);
    }

    if (registerModal) {
        return <Register setRegisterModal={setRegisterModal} />
    }

    return (
        <div className={classes.Auth}>
            <form>
                <input placeholder='E-mail' value={authForm.email} name='email' onChange={inputChangeHandler} />
                <input placeholder='Пароль' value={authForm.password} name='password' onChange={inputChangeHandler} />
                <button onClick={loginHandler} >Войти</button>
                <button onClick={registerModalHandler} >Регистрация</button>
            </form>
        </div>
    )
}