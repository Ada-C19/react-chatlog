import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, onLikeChange }) => {
return (
<div className="chat-log">
    {entries.map((entry) => (
    <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        onLikeChange={onLikeChange}
    />
    ))}
</div>
);
};

export default ChatLog;
