import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';


const ChatLog = ({ entries }) => {
    const entryComponents = entries.map(entry => {
        return <ChatEntry 
        entry={entry} />
    })
    return entryComponents
}

export default ChatLog;