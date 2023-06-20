import React from 'react';

const LikeCounter = ({ count }) => {
    return (
    <div className="like-counter">
        <p>Total Likes: {count}</p>
    </div>
    );
};

export default LikeCounter;
