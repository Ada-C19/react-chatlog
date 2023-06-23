import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onClick }) => {
    const getChatLogJSX = (entries) => {
        return entries.map((entry) => {
            return (
                <ChatEntry
                    id={entry.id}
                    key={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onClick={onClick}
                />
            );
        });
    };

    return (
        <div>
            <ul className='chat-log'>{getChatLogJSX(entries)}</ul>
        </div>
    )
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired
        })).isRequired,
    onClick: PropTypes.func.isRequired
};

export default ChatLog;