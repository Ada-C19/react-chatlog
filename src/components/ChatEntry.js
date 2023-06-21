import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, setLikes }) => {
  const buttonClass = liked ?  '❤️':'🤍'
  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> { sender } </h2>
      <section className="entry-bubble">
        <p> { body } </p>
        <TimeStamp time = {timeStamp} className="entry-time"></TimeStamp>
        <button className="like" onClick = { () => setLikes(id) } > {buttonClass}
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
  liked: PropTypes.bool.isRequired,
  setLikes: PropTypes.func.isRequired
};

export default ChatEntry;
