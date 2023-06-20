import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js'

const ChatLog = (props) => {
    const ChatEntryComponents = props.entries.map((entry, index) => {

        return (
            <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
            />
        );
    }
    )

return (
    <div>
        { ChatEntryComponents}
    </div>
);


};

ChatLog.propTypes = {
    key: PropTypes.string,
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
};

export default ChatLog;