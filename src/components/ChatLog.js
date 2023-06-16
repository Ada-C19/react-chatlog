import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onUpdateChat}) => {

    const entriesToRender = entries.map((chat) => {
        // console.log(`Desde ChatLog ${chat.id} ${chat.liked}`)
        return (
        <div className='chat-log' key={chat.id}>
        <ChatEntry
            id={chat.id}
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            liked={chat.liked} 
            onUpdateChat={onUpdateChat}
            />
        </div>
    );
    })

    return (
        <section>{entriesToRender}</section>
    )
};

export default ChatLog;

