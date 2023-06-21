import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';

const ChatLog = chatMessages.map(entries => {
        return <ChatEntry 
        entries={entries} />
    })

export default ChatLog;