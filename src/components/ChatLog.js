import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  
  const chatComponents =  props.entries.map(entry => {
    return (
        <ChatEntry 
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        handleLikeToggle={props.handleLikeToggle}
        />
     );
    });
    return (
      <div className="chat-log">
        {chatComponents}
      </div>
    )
};

ChatLog.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};


export default ChatLog;