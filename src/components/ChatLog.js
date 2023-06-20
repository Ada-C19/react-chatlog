import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

// Ask why line 7 needs the brackets around entries unlike using props when passing it in as parameter
const ChatLog = ({entries}) => {
    console.log(entries)
    const getChatLogJSX = (messages) => {
        return messages.map((message) => {
            return (
                <ChatEntry 
                    sender={message.sender}
                    body={message.body}
                    time={message.timeStamp}
                />
            );
        });
    };

    return (
        <div>
            <h2>Chats Log component here!!</h2>
            <ul>{getChatLogJSX(entries)}</ul>
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ChatLog;