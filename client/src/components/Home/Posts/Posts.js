import React from 'react';
import classes from './Posts.module.scss';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);

    return (
        <div className={classes.Posts}>
            {
                posts.length
                ? posts.map(post => <Post post={post} key={post} />)
                : <p>Постов пока нет..</p>
            }
        </div>
    )
}

export default Posts; 