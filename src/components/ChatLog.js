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
        />
    ))
}

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog

