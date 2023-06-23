import React from 'react';
import PropTypes from 'prop-types'
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onLikeChange }) => {
    let isLocal = false;

    return (
        <div className='chat-log'>
            {
                entries.map((entry) => {
                // Toggle the value of isLocal for each entry
                isLocal = !isLocal;
                return (
                    <ChatEntry
                        key={entry.id}
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        liked={entry.liked}
                        onLikeChange={onLikeChange}
                        isLocal={isLocal} // Pass the isLocal value to ChatEntry
                    />
                );
            })}
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
            liked: PropTypes.bool.isRequired
        })
    ).isRequired,
    onLikeChange: PropTypes.func.isRequired,
}

export default ChatLog;