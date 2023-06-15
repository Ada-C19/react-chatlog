import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const messages = props.entries.map(message => {
        return (
            <p>
                <ChatEntry 
                    sender={message.sender} 
                    body={message.body} 
                    timeStamp={message.timeStamp}>
                </ChatEntry>
            </p>

        );
    })

    return (
        <section>
            {messages}
        </section>
    );
};

export default ChatLog;