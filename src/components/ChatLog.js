import React from 'react';
import './ChatLog.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const ChatLog =  ({chatMessages}) => {
    const chatComponents = chatMessages.map((message, index) => {
        return(
        <li key={index}>
        <ChatEntry
        id={message.id}
        sender={message.name}
        body={message.color}
        timeStamp={message.powers}
        liked={message.liked}
        /> 
        </li>
        );
    });
    return (
        <section>
            <h2> Chat Log</h2>
            <ul>
                {chatComponents}
            </ul>
        </section>
    );
};

export default ChatLog;