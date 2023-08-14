
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState(props.liked);

  const toggleLiked = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    
    // Safeguard the invocation of onLike
    if (props.onLike) {
      props.onLike(newLikedStatus);
    }
  };

  return (
    <div className="chat-entry">
      <h3>{props.sender}</h3>
      <p>{props.body}</p>
      <TimeStamp time={props.timeStamp} />
      <button className="like" onClick={toggleLiked}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  // Make onLike prop optional
  onLike: PropTypes.func
};

export default ChatEntry;