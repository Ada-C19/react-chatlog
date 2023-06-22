import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog =  ({ entries, handleLike }) => {
    const chatComponents = entries.map((message, index) => {
        return (
            <li key={index}>
                <ChatEntry
                    handleLike={handleLike}
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                    liked={message.liked}

                /> 
            </li>
        );
    });
    return (
        <section>
            <h2 className='chat-log'>Chat Log</h2>
            <ul>{chatComponents}</ul>
        </section>

    );
};

export default ChatLog;