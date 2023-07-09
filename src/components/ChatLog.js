import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
    return entries.map((entry) => {
        return (
            <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                liked={entry.liked}
                timeStamp={entry.timeStamp}
            />
        );
    });
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ),
};

export default ChatLog;