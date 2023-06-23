import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    
    return (
        <div className="chat-log">
            {props.entries.map((entry) => (
                <ChatEntry
                key={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                likes={entry.likes}
                updateLikes={props.updateLikes}
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
            // likes: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateLikes: PropTypes.func
};

export default ChatLog;
