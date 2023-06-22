import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, updateChatData}) => {
    console.log(entries)
    const getChatLogJSX = (messages) => {
        return messages.map((message) => {
            return (
                <ChatEntry 
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    updateChatData={updateChatData}
                />
            );
        });
    };

    return (
        <div>
            <ul>{getChatLogJSX(entries)}</ul>
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
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateChatData: PropTypes.func.isRequired,
};

export default ChatLog;