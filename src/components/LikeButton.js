import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = (props) => {
  if (props.heartCondition) {
    return <button onClick={props.updateLike}>❤️</button>
  } else {
    return <button className='like' onClick={props.updateLike}>🤍</button>
  };
};

LikeButton.propTypes = {
  heartCondition: PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired
}

export default LikeButton;