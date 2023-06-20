import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js'
import {useState} from 'react';

const ChatEntry = (props) => {
  const onChatLikedButton = () => {
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked 
    };
    props.updateEntry(updatedChat);

  };

  const messageAlign = props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className={messageAlign}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button onClick={onChatLikedButton} className="like">{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  updateChatData: PropTypes.func
};

export default ChatEntry;
