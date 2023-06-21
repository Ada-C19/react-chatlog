import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import { DateTime } from 'luxon';

const ChatLog = ({entries, updateLikes}) => {
    const entryComponents = [];
    // This is the same as const entries = props.entries

    for (const message of entries) {
        entryComponents.push(
            <ChatEntry 
                key={message.id}
                id={message.id}
                sender={message.sender} 
                body={message.body} 
                timeStamp={message.timeStamp} 
                liked={message.liked}
                updateLikes={updateLikes}
            />
        );
    }
    return <div className='chat-log'>{entryComponents}</div>;
};

ChatLog.prototypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ),
    updateLikes: PropTypes.func.isRequired,
}
export default ChatLog;