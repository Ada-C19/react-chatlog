import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {

  //deconstruct
  const { sender, body, timeStamp, liked, redFilledHeartCount, setredFilledHeartCount } = props;
  
  //remember initial state liked = false
  const [isEmptyHeart, setIsEmptyHeart] = useState(liked);

  //function to toggle 
  const updateHeart = () => {
    setIsEmptyHeart(!isEmptyHeart);
    
    //checkpoint - if true
    if (!isEmptyHeart) {
      setredFilledHeartCount(redFilledHeartCount + 1);
    }
  }
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={updateHeart}>
          {isEmptyHeart ? '❤️' : '🤍'} 
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  redFilledHeartCount: PropTypes.number.isRequired,
  setredFilledHeartCount: PropTypes.func.isRequired

};

export default ChatEntry;
