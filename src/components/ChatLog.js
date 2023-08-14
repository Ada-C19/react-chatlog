// src/components/ChatLog.js
import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

const chatEntries = props.entries.map(entry => (
    <ChatEntry
    key={entry.id} 
    {...entry}
    onLike={props.onLike}
    />
));

return (
    <div className="chat-log">
    {chatEntries}
    </div>
);
}

export default ChatLog;
