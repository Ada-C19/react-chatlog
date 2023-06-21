import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const onLikedButtonClick = () => {
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      time: props.timeStamp,
      liked: !props.isliked
    };

    props.onUpdate(updatedChat);
  };

  const likeColor= props.isliked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button onClick={onLikedButtonClick} className="like">{likeColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isliked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
