import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const Chats = props.entries.map((entry) => {
        return (
            <ChatEntry
            sender={entry.sender}
            body={entry.body}
            id={entry.id}
            timeStamp={entry.timeStamp} 
            liked={entry.liked}
            updateLikes={props.updateLikes}
            />
        );
    });
    return <div className='chat-log'>{Chats}</div>;
};

export default ChatLog