import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
    const chatEntryComponents = props.chatEntries.map((chatEntry, index) => {
        return (
            <ChatEntry key={index} name={chatEntry.name} body={chatEntry.body} timeStamp={chatEntry.timeStamp} id={chatEntry.id}/>
        )
    });
    return (
        <ul>
            {chatEntryComponents}
        </ul>
    );
};

export default ChatLog