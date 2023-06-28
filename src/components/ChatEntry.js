import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = ({ id, sender, body, timeStamp, calculateLikedCount, liked, type, color }) => {  
  const toggleLike = () => {
    calculateLikedCount(id);
  };
  // type  = 'local' ? 'local' : 'remote';

  return (
    // <div className="chat-entry local">
      <div className={`chat-entry ${type}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color} >{body}</p>
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
  type: PropTypes.oneOf(['local', 'remote']).isRequired,
  color: PropTypes.string.isRequired,

};

export default ChatEntry;
