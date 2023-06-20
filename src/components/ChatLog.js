import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
    const chatLogData = entries.map((chat) => {
        return (
            <ChatEntry 
                sender={chat.sender} 
                body={chat.body} 
                timeStamp={chat.timeStamp} 
            />
        );
    });


    return (
        <div>
        {chatLogData}
        </div>
    );
}; 

export default ChatLog;