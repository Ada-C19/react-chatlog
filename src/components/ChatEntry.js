import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleClick = (event) => {
    props.onLikeClicked(props.id)
  }

  const chatName = (props.sender === 'Vladimir') ? 'local':'remote';
  return (
  <div>
    <div className={`chat-entry ${chatName}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={handleClick}>{props.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeClicked: PropTypes.func,
};

export default ChatEntry;