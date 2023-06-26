import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';



const ChatLog = ({entries, heartClick}) => {
    
    const getChatLog = () => {
        return entries.map((entry) => {
            return (        
                <ChatEntry 
                key= {entry.id}
                id= {entry.id}
                sender= {entry.sender}
                body= {entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                heartClick= {heartClick}
                />
            );
        });
    };
    return (
        <div>
            {getChatLog(entries)}
        </div>
    )
};

export default ChatLog;