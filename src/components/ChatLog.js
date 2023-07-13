import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, handleLike }) => {
    return (
        <div>
            {entries.map((entry) => (
            <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            handleLike={handleLike}
            liked={entry.liked}
            key={entry.id}
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