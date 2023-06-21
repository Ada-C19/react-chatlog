import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';

const ChatLog = chatMessages.map(entries => {
        return <ChatEntry 
        key={entries.id}
        id={entries.id}
        sender={entries.sender}
        body={entries.body}
        timeStamp={entries.timeStamp}
        liked={entries.liked} />
    })

export default ChatLog;