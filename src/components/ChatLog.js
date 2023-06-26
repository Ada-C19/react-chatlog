import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js'

const ChatLog = (props) => {
    if (!props.chatData) {
        return null
    }
    const ChatLogEntries = props.chatData.map((entry) => {
        return (
            <div key={entry.id}>
                <ChatEntry 
                    id={entry.id} 
                    sender={entry.sender} 
                    timeStamp={entry.timeStamp} 
                    body={entry.body} 
                    liked={entry.liked}
                    onUpdateChat={props.onUpdateChat}
                ></ChatEntry>
            </div>
        );
    });
    
    return (
        <div>
            {ChatLogEntries}
        </div>
    );
};

ChatLog.propTypes = {
    chat: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        senderData: PropTypes.string.isRequired,
        bodyData: PropTypes.string.isRequired,
        likedData: PropTypes.bool.isRequired
    })),
    onUpdateChat: PropTypes.func.isRequired
};

export default ChatLog
