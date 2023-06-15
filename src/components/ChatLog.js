import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog =  ({ chatMessages }) => {
    const chatComponents = chatMessages.map((message, index) => {
        return (
            <>
                <ChatEntry
                id={message.id}
                sender={message.name}
                body={message.color}
                timeStamp={message.powers}
                liked={message.liked}
                /> 
            </>
        );
    });
    return (
        <section>
            <h2> Chat Log</h2>
            <ChatEntry messages={chatComponents}/>

        </section>
    );
};

export default ChatLog;