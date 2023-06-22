import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, handleLikeClick }) => {
    return (
        <div className="chat-log">
            {entries.map((entry) => (
                <ChatEntry
                    {...entry}
                    key={entry.id}
                    handleLikeClick={() => handleLikeClick(entry.id)}
                />
            ))}
        </div>
    );
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
    ).isRequired,
        // handleLikeClick: PropTypes.func.isRequired,
};

export default ChatLog;