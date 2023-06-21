import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';


const ChatEntry = (props) => {
  const localSender = props.sender === 'Vladimir';

  const handleClick = () => {
    props.onLike();
  }

  return (
    <div className={`chat-entry ${localSender ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp}/></p>
        <button className="like" onClick={handleClick}>
          {props.liked ? '❤️' : '🤍'}
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
};

export default ChatEntry;
