import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, liked }) => {
  const [like,setLike] = useState(liked)
  const changeLike = () => {
    setLike(!like)
  }
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> { sender } </h2>
      <section className="entry-bubble">
        <p> { body } </p>
        <TimeStamp time = {timeStamp} className="entry-time"></TimeStamp>
        <button className="like" onClick = { changeLike } >🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
