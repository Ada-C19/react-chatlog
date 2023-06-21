import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'


const ChatLog = ({ entries, toggleLikes }) => {
    const entryComponents = entries.map(entry => {
        return <ChatEntry 
        key={entry.id}
        toggleLikes={toggleLikes} 
        sender={entry.sender}
        timeStamp={entry.timeStamp}
        body={entry.body}
        liked={entry.liked}
        id={entry.id}
        />
    })
    return entryComponents
};

ChatLog.propTypes = {
    chatEntry: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.number.isRequired
        })
    ),
    toggleLikes : PropTypes.func.isRequired
}

export default ChatLog;