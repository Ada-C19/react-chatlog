import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';


const Post = ({liked}) => {

    const [ likeCount, setLikeCount ] = useState(0);

    // console.log(!liked)

    
    if (liked===true) {
        setLikeCount(likeCount + 1);
    };
        

    return (
        <section>
            <p>You have {likeCount} likes</p>
        </section>
    );
};

export default Post;