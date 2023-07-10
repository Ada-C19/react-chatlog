import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({entries, onLikeUpdate}) => {
    return entries.map((entry) => {
        return (
            <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                liked={entry.liked}
                timeStamp={entry.timeStamp}
                onLikeUpdate={onLikeUpdate}
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
    onLikeUpdate: PropTypes.func
};

export default ChatLog;