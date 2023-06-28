import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
import React from 'react';

const ChatLog = ({ entries, calculateLikedCount,colorLocal,colorRemote }) => {
    const chatComponents = entries.map((chat) => {
        return (<ChatEntry 
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp} 
        calculateLikedCount={calculateLikedCount}
        liked={chat.liked}
        type={chat.sender === 'Vladimir' ? 'local' : 'remote'}
        color={chat.sender === 'Vladimir' ? colorLocal : colorRemote}
        />
        );
    });
    return (
        <div>
            {chatComponents}
        </div>
    );
};
ChatLog.propTypes = {
    entries:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
    })).isRequired,
    calculateLikedCount: PropTypes.func.isRequired,
    colorLocal: PropTypes.string.isRequired,
    colorRemote: PropTypes.string.isRequired,
};
export default ChatLog;

