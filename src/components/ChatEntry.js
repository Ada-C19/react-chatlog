import React from 'react';
import { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    if (color === true) {
      setColor(false)
      props.decrementLikes()
    } else if (color === false) {
      setColor(true)
      props.incrementLikes()
    }
  }
 
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={handleClick}>{!color ? '🤍' : '❤️'}</button>
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
