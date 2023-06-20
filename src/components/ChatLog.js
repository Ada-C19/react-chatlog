import React, { useState } from 'react';
import ChatEntry from './ChatEntry';
import messages from '../data/messages.json'

const ChatLog = () => {
    const [chatMessages, setChatMessages] = useState(messages);

    const handleLikeClick = (index) => {
        const updatedMessages = [...chatMessages];
        const message = {...updatedMessages[index]};
        updatedMessages[index] = message;
        message.liked = !message.liked;
        console.log(updatedMessages[index], chatMessages[index])
        setChatMessages(updatedMessages);
    };

    // console.log(messages)
    return (
        <div>
        <h1>Chat Log</h1>
        {chatMessages.map((message,index) => (
        <ChatEntry
        key={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onLikeClick = {() => handleLikeClick(index)}
        />
        ))}
    </div>
    );
};
export default ChatLog;