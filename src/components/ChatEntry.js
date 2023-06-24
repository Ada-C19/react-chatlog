import React from 'react';
import './ChatEntry.css';
import './ChatBubble.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, type, color, onLike}) => {
  const entryClass = type === 'local' ? 'local' : 'remote';
  const bubbleClass = type === 'local' ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${entryClass}`}>
      <h2 className={`entry-name ${bubbleClass}`}style={{ color: color }}>
        {sender}
      </h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <TimeStamp className="entry-time" time={timeStamp} />
        <button className="like" onClick={() => onLike(id)}>
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
  liked: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ChatEntry;
