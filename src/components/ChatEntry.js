import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({ id, sender, liked, body,timeStamp, handleLike }) => {

  const heart = liked ? '❤️' : '🤍';
  
  return (
    <div className={`chat-entry ${id % 2 !== 0 ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <TimeStamp className="entry-time" time={timeStamp}/>
        <button className="like" onClick={() => handleLike(id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
