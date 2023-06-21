import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, isLikedData, onChatState}) => {
  const changeLike = () => {
    const newEntry = {
      id: id,
      sender: sender,
      body: body, 
      timeStamp: timeStamp, 
      liked:!isLikedData,
    }
    onChatState(newEntry); 
  };

  const heartfilled = isLikedData ? '👎' : '✋';
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
  timeStamp:PropTypes.string.isRequired,
  isLikedData:PropTypes.bool.isRequired, 
  onChatState: PropTypes.func.isRequired
};

export default ChatEntry;
