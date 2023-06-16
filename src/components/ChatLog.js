import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    const { entries } = props;
  
    return (
      <div className="chat-log">
        {entries.map((entry) => (
          <ChatEntry
            key={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
          />
        ))}
      </div>
    );
  };
  
  export default ChatLog;
  