import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const entryClassName = props.sender === 'Vladimir'? 'chat-entry local': 'chat-entry remote';

  const[localLiked, setLocalLiked] = useState(props.liked);
  const toggleLike = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onUpdateEntry(updatedEntry);
    setLocalLiked(!localLiked);
  }


  const heartColor = localLiked === true? '❤️' : '🤍';
  return (
    <div className={entryClassName}>
      <h2 className="entry-name">{props['sender']}</h2>
      <section className="entry-bubble">
        <p>{props['body']}</p>
        <p><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={toggleLike}>{heartColor}</button>
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
    onUpdateEntry: PropTypes.func.isRequired
};

export default ChatEntry;


