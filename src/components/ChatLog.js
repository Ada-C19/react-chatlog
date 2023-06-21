import React, {useState} from 'react';
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
    
    return <div className='chat-log'>{ChatLogs} </div>;
};

export default ChatLog;