import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatEntry, index) => {
        return (
            <ChatEntry key={index} sender={chatEntry.sender} body={chatEntry.body} timeStamp={chatEntry.timeStamp} id={chatEntry.id}/>
        )
    });
    return (
        <ul>
            {chatEntryComponents}
        </ul>
    );
};

export default ChatLog