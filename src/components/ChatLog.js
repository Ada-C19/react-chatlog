import React from 'react';
import ChatEntry from './ChatEntry';


const ChatLog = ({chatMessages, handleLikeClick}) => {
    
    return (
        <div>
        <h1>Chat Log</h1>
        {chatMessages && chatMessages.map((message,index) => (
        <ChatEntry
        key={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onLikeClick={() => handleLikeClick(index)}
        />
        ))}
    </div>
    );
};
export default ChatLog;