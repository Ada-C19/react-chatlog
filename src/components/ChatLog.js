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
            timeStamp={message.timeStamp}
            liked={message.liked}
            id={message.id}
            updateLikedMessagesCount={props.updateLikedMessagesCount}
            />
        );    
    });   
    return <div className='container'>{ChatLogs}</div>;
};
export default ChatLog;