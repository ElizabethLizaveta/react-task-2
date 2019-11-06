import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({ posts }) => {

    const elements = posts.filter((item) => {
        return typeof item === 'object';
    }).map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem
                    label={item.label}
                    important={item.important} />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;