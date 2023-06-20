import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react'; 

const ChatEntry = ({ id, sender, body, timeStamp, isLiked}) => {
  // updating state for like status
  const [userLiked, setLikeStatus] = useState(isLiked);

  const changeLike = () => {
    setLikeStatus(!userLiked);
  };

  const heartfilled = userLiked ? '❤️' : '🤍';
  return ( 
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button onClick={changeLike} className="like">{heartfilled}</button>
      </section>
    </div>
  );
};


ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired
};

export default ChatEntry;
