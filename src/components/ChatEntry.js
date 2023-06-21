import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({ id, sender, body, timeStamp, calculateLikedCount, liked }) => {  
  const toggleLike = () => {
    calculateLikedCount(id);
  };
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <TimeStamp className="entry-time" time={timeStamp} />
        <button onClick={toggleLike} className="like">
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
  calculateLikedCount: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
