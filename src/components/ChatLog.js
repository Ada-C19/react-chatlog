import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'

const ChatLog = (props) => {
  
  const chatComponents =  props.entries.map(entry => {
    return (
      <div>
        <ChatEntry 
        key={entry.id} 
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
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