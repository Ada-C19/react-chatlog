import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import { DateTime } from 'luxon';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLikes}) => {
  const likedButtonContent = liked ? ' ': ' ';
  const localOrRemote = (sender === 'Vladimir') ? 'chat-entry local' : 'chat-entry remote';
  
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like">🤍</button>
        <button onClick={toggleLiked} className="heart-button"></button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  "id": PropTypes.number,
  "sender": PropTypes.string.isRequired,
  "body": PropTypes.string.isRequired,
  "timeStamp": PropTypes.string.isRequired,
  "liked": PropTypes.bool.isRequired,
  "isLiked": PropTypes.func,
  "updateLikes": PropTypes.func
};

export default ChatEntry;
