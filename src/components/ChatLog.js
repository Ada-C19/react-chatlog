import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, handleLikeClick, totalLikes }) => {
    return (
        <div className="chat-log">
            {entries.map((entry) => (
                <ChatEntry
                    {...entry}
                    key={entry.id}
                    handleLikeClick={handleLikeClick}
                    totalLikes={totalLikes}
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
        })
    ).isRequired,
    handleLikeClick: PropTypes.func.isRequired,
    totalLikes: PropTypes.number.isRequired,
};

export default ChatLog;