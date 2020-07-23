import React from 'react';
import classes from './Post.module.scss';

const Post = ({ post }) => {
    return (
        <div className={classes.Post}>
            <div className={classes.title}>{ post.title }</div>
            <div className={classes.text}>{ post.text }</div>
        </div>
    )
}

export default Post;