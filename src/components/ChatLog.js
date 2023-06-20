import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const ChatLogs = props.entries.map((message) => {
    return (
        <ChatEntry
        sender={message.sender}
        body={message.body}
        key={message.id}
        time={message.timeStamp}
        />
    );    
    });   
    return <div className='container'>{ChatLogs}</div>;
};
export default ChatLog;