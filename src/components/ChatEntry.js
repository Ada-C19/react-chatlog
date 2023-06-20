import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp
          time = {props.timeStamp}/>
          </p>
        <button className="like" onClick={() => {props.changeLiked(props.id);}}>{getLikes(props.liked)}</button>
      </section>
    </div>
  );
};

const getLikes = (liked) => {
  if (liked) {
    return '❤️'
  }
  return '🤍'
}

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  changeLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
