import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries}) => {
    return (
        <div>
            {entries.map((entry, id) => (
            <ChatEntry
            id={id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
        />
        ))}
        </div>
    );
    };

    ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        TimeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
    };

export default ChatLog;