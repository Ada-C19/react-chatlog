import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  console.log(entries);
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          key={entry.id}
        />
      ))}
    </div>
  );
};

export default ChatLog;
