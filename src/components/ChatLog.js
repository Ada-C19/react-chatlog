import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, updateLiked}) => {

    const chatEntryComponents = entries.map(entry => {
        return (
            <ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} updateLiked={updateLiked}></ChatEntry>
        );
    });

    return (
        <div className="chat-log">
            {chatEntryComponents}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateLiked: PropTypes.func,
}
export default ChatLog;