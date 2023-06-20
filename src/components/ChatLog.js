import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onToggleLike}) => {

    const ChatComponents = entries.map((message) => {
        return (
        <div>
            <ChatEntry 
            id={message.id} 
            sender={message.sender} 
            body={message.body} 
            timeStamp={message.timeStamp} 
            liked={message.liked} 
            onToggleLike={onToggleLike}/>
        </div>)
});
    return (
        <div>
            {ChatComponents}
        </div>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        onToggleLike: PropTypes.func.isRequired, 
    })).isRequired,
};

export default ChatLog;