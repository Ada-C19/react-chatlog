import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './ChatEntry.css';

const ChatEntry = ({ id, sender, body, timeStamp, onLikeChange }) => {
  const timeAgo = formatDistanceToNow(new Date(timeStamp), { addSuffix: true });
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onLikeChange(!isLiked);
  };

  const bubbleClass = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${bubbleClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeAgo}</p>
        <button
          className="like-button like"
          onClick={handleLikeClick}
          id={`like-button-${id}`}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onLikeChange: PropTypes.func,
};

export default ChatEntry;
