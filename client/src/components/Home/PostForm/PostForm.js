import React, { useState } from 'react';
import classes from './PostForm.module.scss';
import { createPost } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const PostForm = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        title: '',
        text: ''
    });

    const inputChangeHandler = event => {
        setPost({
            ...post,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        });
    }

    const createPostHandler = () => {
        dispatch(createPost(post));
        setPost({
            title: '',
            text: ''
        });
    }

    return (
        <div className={classes.Postform}>
            <input value={post.title} name='title' onChange={inputChangeHandler} placeholder='Введите заголовок..' />
            <textarea value={post.text} name='text' onChange={inputChangeHandler} placeholder='Введите текст..'></textarea>
            <button onClick={createPostHandler} >Отправить</button>
        </div>
    )
}

export default PostForm;