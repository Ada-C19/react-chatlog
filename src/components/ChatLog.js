import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ( { entries, likeMessage, unlikeMessage } ) => {
    const chatEntries = entries.map(entry => {
        return (
            <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                likeMessage={likeMessage}
                unlikeMessage={unlikeMessage}
            />
        )
    })

    return (
        <>
        {chatEntries}
        </>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
  };

export default ChatLog;