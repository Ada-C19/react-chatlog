import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js'
import { useState } from 'react';

const ChatEntry = (props) => {
  /*
  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  */

  const onLikeButtonClick = () => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedChatEntry);
  }

  const like = props.liked ? '❤️': '🤍'
  const messagesFormat = props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
  return (
    <div className={messagesFormat}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className='like' onClick={onLikeButtonClick}>{like}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate:PropTypes.func
};

export default ChatEntry;
