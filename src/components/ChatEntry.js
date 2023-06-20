import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {


  const onLikeButtonClick = () => {
    const updateEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdateEntryData(updateEntry);
    props.updateLikes(!props.liked);
  };

  const likeHeart = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={props.timeStamp} />{' '}
        </p>
        <button className="like" onClick={onLikeButtonClick}>
          {likeHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateEntryData: PropTypes.func.isRequired,
};

export default ChatEntry;
