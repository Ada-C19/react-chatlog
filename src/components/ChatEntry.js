import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'; 
import './ChatEntry.css';

const ChatEntry = ({ sender, body, timeStamp, liked, onLikeChange, isLocal}) => {
  const [isLiked, setLiked] = useState(liked); 

  const handleLikeToggle = () => {
    setLiked((prevLiked) => !prevLiked); 
    onLikeChange(!isLiked);
  };

  return (
    <div className={`chat-entry ` + (isLocal ? 'local': 'remote')}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button 
            className="like"
            onClick={handleLikeToggle}>
            {isLiked ? '❤️' : '🤍'} 
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeChange: PropTypes.func.isRequired,
};

export default ChatEntry;
