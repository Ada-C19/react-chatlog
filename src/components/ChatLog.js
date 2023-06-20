import ChatEntry from './ChatEntry.js';
import React from 'react';

const ChatLog = ({entries, likeMessage}) => {
    const chatEntries= (entries) => {
        return entries.map((message) => {
            return(
                <ChatEntry
                    key={message.id}
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    likeMessage={likeMessage}
                />

            );
        });
    };
        return <div className='chat-log'>{chatEntries(entries)} </div>;
};


export default ChatLog;