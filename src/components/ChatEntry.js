import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, increaseLikes }) => {

  const sendReceive = sender === 'Estragon' ? 'remote': 'local';
  const heart = liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${sendReceive}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => increaseLikes(id)}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.any.isRequired,
  liked: PropTypes.bool.isRequired,
  increaseLikes: PropTypes.func.isRequired
};

export default ChatEntry;
