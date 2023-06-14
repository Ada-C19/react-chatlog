import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {

  const { sender, body, timeStamp } = props;
  
  const [isEmptyHeart, setIsEmptyHeart] = useState(false);

  //function to toggle from false to true
  const updateHeart = () => {
    setIsEmptyHeart(!isEmptyHeart);
  }


  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button
          className="like"
          onClick={updateHeart}>
          {isEmptyHeart ? '🤍' : '❤️'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
