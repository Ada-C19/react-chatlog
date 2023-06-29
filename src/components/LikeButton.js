import React from 'react';

const LikeButton = (props) => {
  if (props.heartCondition) {
    return <button onClick={props.updateLike}>❤️</button>
  } else {
    return <button onClick={props.updateLike}>🤍</button>
  };
};

export default LikeButton;