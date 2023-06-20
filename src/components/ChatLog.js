import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog =  ({ chatMessages }) => {
    const chatComponents = chatMessages.map((message, index) => {
        return (
            <>
                <ChatEntry
                    message = {message}
                /> 
            </>
        );
    });
    return (
        <section>
            <h2 className='chat-log'>Chat Log</h2>
            {chatComponents}
        </section>

    );
};

export default ChatLog;