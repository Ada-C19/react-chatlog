import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ( props ) => {
const chatMessages = [];
const entries = props.entries;


for (const entry of entries) {
    chatMessages.push(
        <ChatEntry
        key = {entry.id}
        id = {entry.id}
        sender = {entry.sender}
        body = {entry.body}
        timeStamp = {entry.timeStamp}
        liked = {entry.liked}
        />
    );
};

    return (
        <div className="chat-log">
            {chatMessages}
        </div>
    );
    };

    ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    })
    ).isRequired,
    };

export default ChatLog; 