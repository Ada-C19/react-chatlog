import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = [];
    const chatEntries = props.entries;
    const updateLikes = props.updateLikes;

    for(const chatentry of chatEntries) {
        chatEntryComponents.push(
            <div key={chatentry.id}>
                <ChatEntry
                id={chatentry.id}
                sender={chatentry.sender}
                body={chatentry.body}
                timeStamp={chatentry.timeStamp}
                liked={chatentry.liked}
                updateLikes={updateLikes}
                />
            </div>
        );
    }
    return <div className="chat-log">{chatEntryComponents}</div>;
};

ChatLog.protoTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ),
    updateLikes: PropTypes.func.isRequired,
}

export default ChatLog;