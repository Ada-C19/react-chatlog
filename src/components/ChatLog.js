import React from 'react';
// import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                key={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
            />
        );
    });

    return chatComponents;
};

export default ChatLog;