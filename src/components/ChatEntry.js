import React from 'react';
import PropTypes from 'prop-types';

import TimeStamp from './TimeStamp.js'

import './ChatEntry.css';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    }
    props.onUpdate(updatedEntry)
  }

  const likeStatus = props.liked ? '❤️' : '🤍';
  
  let entryOrigin;
  let textColor;
  if (props.sender === props.local) {
    entryOrigin = 'chat-entry local';
    textColor = props.colorChoices.local;
  } else if (props.sender === props.remote){
    entryOrigin = 'chat-entry remote';
    textColor = props.colorChoices.remote;
  }
  
  return (
    <div className={entryOrigin}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={textColor}>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick={onLikeButtonClick}>{likeStatus}</button>
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
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;