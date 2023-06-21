import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
import React from 'react';

const ChatLog = ({ entries, calculateLikedCount }) => {
    const chatComponents = entries.map((chat) => {
        return (<ChatEntry 
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp} 
        calculateLikedCount={calculateLikedCount}
        liked={chat.liked}
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
    calculateLikedCount: PropTypes.func.isRequired
};
export default ChatLog;

