import ChatEntry from './ChatEntry.js';
import React from 'react';

const ChatLog = ({entries, likeMessage}) => {
    const chatEntries= (entries) => {
        return entries.map((message) => {
            return(
                <ChatEntry
                entry = {message}
                key={message.id}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
                liked={message.liked}
                messageClass={message.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote'}
                likeMessage={likeMessage}
                />

            );
        });
    };
        return <div className='chat-log'>{chatEntries(entries)} </div>;
};


export default ChatLog;