import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLiked}) => {

  // const buttonClass = liked ? "liked" : "notLiked";
  const emoji = liked ? '❤️' : '🤍';
  const entrySource = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={entrySource}>
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p> {body} </p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => {updateLiked(id);}}>{emoji}</button>
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
  updateLiked: PropTypes.func,
};

export default ChatEntry;
