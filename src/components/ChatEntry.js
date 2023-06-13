import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const id = props.id;
  const [isLiked, setIsLiked] = useState(props.liked);
  const swapLiked = () => {
    setIsLiked(!isLiked);
  };
  const buttonContent = isLiked ? '❤️' : '🤍';

  const location = (id % 2 !== 0) ? 'chat-entry local' : 'chat-entry remote';

  return(
    <div className={location}>
    <h2 className="entry-name">{props.sender}</h2>
    <section className="entry-bubble">
      <p>{props.body}</p>
      <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
      <button onClick={swapLiked}>{buttonContent}</button>
    </section>
  </div>
  );
};

ChatEntry.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ChatEntry;
