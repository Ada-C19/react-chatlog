import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  
  const chatComponents =  props.entries.map(entry => {
    return (
      <div className="chat-log">
        <ChatEntry 
        id={entry.id} 
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

export default ChatLog;