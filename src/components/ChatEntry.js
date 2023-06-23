import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp, id, liked, handleLike }) => {
  const getTimeAgo = () => {
    const now = new Date();
    const messageTime = new Date(timeStamp);
    const timeDifference = now - messageTime;
    const diffYears = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

    return `${diffYears} years ago`;
  };

  return (
    <div className={`chat-entry ${liked ? 'local liked' : 'local'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{getTimeAgo()}</p>
        <button className="like" onClick={() => handleLike(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
