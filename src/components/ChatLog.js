import React from 'react'
import ChatEntry from './ChatEntry'
import PropTypes from 'prop-types';
// import chatMessages from './data/messages.json';

const ChatLog = ({ entries }) => {
    const messageComponents = entries.map(entry => {
        return (
            <div>
                <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
            </div>
        );
    });

    return (
        <div>
            {messageComponents}
        </div>
    )
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        }
        ).isRequired
    )
};

export default ChatLog;