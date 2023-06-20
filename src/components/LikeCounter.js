import React from 'react';

const LikeCounter = ({ count }) => {
    return (
    <div className="like-counter">
        <p>Total Likes: {count} ❤️s</p>
    </div>
    );
};

export default LikeCounter;
