import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onChatState}) => {
    const chatLogData = entries.map((chat) => {
        return (
            <ChatEntry
                key={chat.id}
                id={chat.id}
                sender={chat.sender} 
                body={chat.body} 
                timeStamp={chat.timeStamp} 
                onChatState={onChatState}
                isLikedData={chat.liked}

            />
        );
    });

    return (
        <div>
        {chatLogData}
        </div>
    );
}; 

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        sender:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        timeStamp:PropTypes.string.isRequired,
        isLikedData: PropTypes.bool.isRequired
    })).isRequired,
    onChatState: PropTypes.func.isRequired
};

export default ChatLog;