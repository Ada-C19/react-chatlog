import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp, liked, onLikeClick }) => {
  const isLocal = sender === 'Estragon';

  return (
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button onClick={onLikeClick}>{liked ? '❤️': '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
