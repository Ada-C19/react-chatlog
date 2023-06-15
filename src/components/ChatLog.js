import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog =  ({ chatMessages }) => {
    const chatComponents = chatMessages.map((message, index) => {
        return (
            <>
                <ChatEntry
                    message = {message}
                    // id={message.id}
                    // sender={message.sender}
                    // body={message.body}
                    // timeStamp={message.timeStamp}
                    // liked={message.liked}
                /> 
            </>
        );
    });
    return (
        <section>
            <h2> Chat Log</h2>
            {chatComponents}
        </section>

    );
};

export default ChatLog;