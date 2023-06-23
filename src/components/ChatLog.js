import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js'
import chatMessages from '/Users/japonte/Developer/projects/react-chatlog/src/data/messages.json';;

const ChatLog = (entries) => {
    const ChatLogEntries = chatMessages.map((events) => {
        return (
            <div>
                <ChatEntry sender={events.sender} timeStamp={events.timeStamp} body={events.body}></ChatEntry>
            </div>
        );
    });
    
    return (
        <div>
            {ChatLogEntries}
        </div>
    );
};

export default ChatLog
