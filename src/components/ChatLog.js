import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const messages = props.entries.map(message => {
        return (
            <p>
                <ChatEntry 
                    id={message.id}
                    sender={message.sender} 
                    body={message.body} 
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    updateLiked={props.updateLiked}
                ></ChatEntry>
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