import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
// import { DateTime } from 'luxon';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setMessages] = useState(props.isLiked);

  // Event handler should do 2 things: 
  // 1) update component's internal state
  // 2) update infomration to SSOT
  const toggleLiked = () => {
    setMessages(!isLiked);
    props.updatedLikes(props.id);
  }
  
  return (
    <div className="chat-entry local">
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
