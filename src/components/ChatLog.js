import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onLike, likedMessages = new Set()}) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={likedMessages.has(entry.id)}
          onLike={() => onLike(entry.id)}
        />
      ))}
    </div>
  );
};

export default ChatLog;