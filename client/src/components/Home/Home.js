import React from 'react';
import classes from './Home.module.scss';
import header from '../../assets/home-header.jpg';
// import { HomeInfo } from './HomeInfo/HomeInfo';
import PostForm from './PostForm/PostForm';
import Posts from './Posts/Posts';

export const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Home__header}>
                <img src={header} alt='header' />
            </div>
            {/* <HomeInfo /> */}
            <PostForm />
            <Posts />
        </div>
    )
}