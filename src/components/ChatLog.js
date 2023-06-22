import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'

const ChatLog = (props) => {
  
  const chatComponents =  props.entries.map(entry => {
    return (
      <div className="chat-log">
        <ChatEntry 
        key={entry.id} 
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        increaseLikes={props.increaseLikes}
        />

    </div>
     );
    });
    return (
      <div>
        {chatComponents}
      </div>
    )
};

ChatLog.prototypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
}

export default ChatLog;