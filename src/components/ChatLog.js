import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatLogComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateLiked={props.updateLiked}
            />
        );
    });
    return (
        <div>
            {chatLogComponents}
        </div>
    );
};


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired, 
            body: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
    updateLiked: PropTypes.func.isRequired,
}

export default ChatLog;