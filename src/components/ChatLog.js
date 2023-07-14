import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntries = props.entries.map(entry => {
        return (
            <ChatEntry 
                key={entry.key}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
            />
        )
    })

    return (
        <div className='chat-log'>
            {chatEntries}
        </div>
        )
};


ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
};

export default ChatLog;