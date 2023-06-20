import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({entries, updateLikes}) => {
    return (
        <div className="chat-log">
            {entries.map((chatEntry) => (
                <ChatEntry
                    key={chatEntry.id}
                    sender={chatEntry.sender}
                    body={chatEntry.body}
                    timeStamp={chatEntry.timeStamp}
                    liked={chatEntry.liked}
                    updateLikes={() => updateLikes(chatEntry.id)}
                />
            ))}
        </div>
    );
};
ChatLog.propTypes={
    entries:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            sender:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired,
            liked:PropTypes.bool.isRequired,
        })
    ).isRequired,
updateLikes:PropTypes.func.isRequired,
}

export default ChatLog;