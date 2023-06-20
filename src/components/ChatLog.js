import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import ChatEntry from './ChatEntry';



const ChatLog = ({ entries, updateLike, color }) => {
    const entryComponents = [];
    for (const message of entries) {
        entryComponents.push(
            <ChatEntry
                key={message.id}
                id={message.id}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
                liked={message.liked}
                updateLike={updateLike}
                color={color}
            />
        );
    }
    return <div className="chat-log">{entryComponents}</div>;
};
ChatLog.protoTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            
        })
    ),
    updateLike: PropTypes.func.isRequired,
    color: PropTypes.func
}
export default ChatLog;







