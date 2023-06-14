import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatEntry, index) => {
        return (
            <ChatEntry onUpdate={props.onUpdateMessage} key={index} sender={chatEntry.sender} body={chatEntry.body} timeStamp={chatEntry.timeStamp} id={chatEntry.id} liked={chatEntry.liked}/>
        )
    });
    return (
        <ul>
            {chatEntryComponents}
        </ul>
    );
};

ChatLog.propTypes = {
    chatEntries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    onUpdateMessage: PropTypes.func.isRequired
};

export default ChatLog