import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatLogComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
            />
        );
    });
    return (
        <div>
            {chatLogComponents}
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
}

export default ChatLog;