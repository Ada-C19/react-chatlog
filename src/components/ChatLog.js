import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return (
        <ul>
            {props.entries.map((entry) => (
                <ChatEntry
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    updateLike={props.updateLike}
                />
            ))}
        </ul>
    )
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired
        })
    ).isRequired,
    // likeDecrease: PropTypes.func.isRequired,
    updateLike: PropTypes.func.isRequired,
}

export default ChatLog;