import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
    const chatLogData = entries.map((chat) => {
        return (
            <ChatEntry
                id={chat.id}
                sender={chat.sender} 
                body={chat.body} 
                timeStamp={chat.timeStamp} 
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
        timeStamp:PropTypes.string.isRequired
    })).isRequired,
};

export default ChatLog;