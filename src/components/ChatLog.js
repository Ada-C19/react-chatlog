// src/components/ChatLog.js

import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatEntries = props.entries.map(entry => {
    return (
      <ChatEntry 
        key={entry.id} 
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  });

  return (
    <div className="chat-log">
      {chatEntries}
    </div>
  );

}

export default ChatLog;
