import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setLiked] = useState(false);
  const [heartColor, setHeartColor] = useState('🤍');

  const changeLiked = () => {
    setLiked(!isLiked);
    changeHeartColor();
  };

  const changeHeartColor = () => {
    if (isLiked === true) {
      setHeartColor('❤️');
    } else {
      setHeartColor('🤍');
    }
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={changeLiked}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
