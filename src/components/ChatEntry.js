import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';


const ChatEntry = ({ sender, body, timeStamp }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [buttonText, setButtonText] = useState('🤍');
  const likeMessage = () => {
    setIsLiked(!isLiked);
    if (isLiked === true) {
      setButtonText('❤️');
    }
    else {
      setButtonText('🤍')
    }
  };
 
  
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like" onClick={likeMessage}>{buttonText}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
}; 

export default ChatEntry;
