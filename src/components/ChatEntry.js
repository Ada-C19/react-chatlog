import React from 'react';
import { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const [isLiked, setIsLiked] = useState(props.liked);

  const toggleLikeButton = () => {
    props.updateLiked(props.id);
    setIsLiked(!isLiked);
  };

  return (
    <div className={ props.id % 2 ? 'chat-entry local' : 'chat-entry remote' }>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={toggleLikeButton}>{isLiked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLiked: PropTypes.func
};

export default ChatEntry;
