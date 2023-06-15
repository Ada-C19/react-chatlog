import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  // const [isLiked, setLiked] = useState(false);
  // const [heartColor, setHeartColor] = useState('🤍');

  // const changeLiked = () => {
  //   setLiked(!isLiked);
  //   changeHeartColor();
  // };

  // const changeHeartColor = () => {
  //   if (isLiked === true) {
  //     setHeartColor('❤️');
  //   } else {
  //     setHeartColor('🤍');
  //   }
  // }

  const onLikeButtonClicked = () => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.isLiked
    };

    props.onUpdate(updatedChatEntry);
  };

  const heartColor = props.isLiked ? '❤️' : '🤍';

  const setLocalOrRemote = () => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local'
    } else {
      return 'chat-entry remote'
    }
  }

  return (
    <div className={setLocalOrRemote()}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={onLikeButtonClicked}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
