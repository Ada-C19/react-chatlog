import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
    return (
    <div className="chat-log">
        {entries.map((entry) => (
        <ChatEntry
            key={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            id={entry.id}
        />
        ))}
    </div>
    );
};

export default ChatLog;
