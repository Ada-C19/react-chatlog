import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js'

const ChatLog = (props) => {
    return props.entries.map((entry) => (
        <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            updateEntry={props.updateChatData}
        />
    ))
}

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
    updateChatData: PropTypes.func.isRequired,
};

export default ChatLog

