import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry)=> {
        return (
            <ChatEntry 
                key = {entry.id}
                id = {entry.id}
                sender = {entry.sender}
                body = {entry.body}
                timeStamp = {entry.timeStamp}
                liked = {entry.liked}
                updateLikeData = {props.updateLikeData}
            />
        );
    }); 
    return (
        <div className="chat-entry local">
            {chatEntryComponents}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })).isRequired,
    updateLikeData: PropTypes.func
};

export default ChatLog;