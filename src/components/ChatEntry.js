import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const messageSide = props.sender === 'Vladimir' ? 'local' : 'remote';

  const toggleLiked = () => {
    props.onLikeEntry(props.id);
  };
  const likedColor = props.liked? '❤️':'🤍';

  return (
    <div className={`chat-entry ${messageSide}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={event=>toggleLiked()}>{likedColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeEntry: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ChatEntry;