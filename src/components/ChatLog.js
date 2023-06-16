import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ( {entries} ) => {
    const chatEntryComponents = entries.map((entry)=> {
        return (
            <ChatEntry 
                key = {entry.id}
                sender = {entry.sender}
                body = {entry.body}
                timeStamp = {entry.timeStamp}
            />
        );
    }); 
    return (
        <div className="chat-entry local"> Chat Log?
            <h2>Chat Log...I hope</h2>
            {chatEntryComponents}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired
    })).isRequired
};

export default ChatLog;