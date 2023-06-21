import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {

  const likeButtonPress = () => {
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
      localName: props.localName
    };

    props.updateChat(updatedChat)
  };

  const heartColor = props.liked ? '❤️' : '🤍'

  const alignment = (props.sender === props.localName) ? 'local' : 'remote'

  return (
    <div className={`chat-entry ${alignment}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={likeButtonPress}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  localName: PropTypes.string
};

export default ChatEntry;
