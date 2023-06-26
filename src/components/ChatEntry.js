import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const timeEntry=props.timeStamp

  const onLikeButtonClick = () => {
    const updatedChat = {
        id: props.id,
        sender: props.sender,
        body: props.body,
        timeStamp: props.timeStamp,
        liked: !props.liked
    };

    props.onUpdateChat(updatedChat);
  };

  const heartColor = props.liked ? '❤️' : '🤍';

  return (
    <div className={props.chatEntry}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={timeEntry}></TimeStamp></p>
          <button className="like" onClick={onLikeButtonClick}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateChat: PropTypes.func.isRequired
};

export default ChatEntry;
