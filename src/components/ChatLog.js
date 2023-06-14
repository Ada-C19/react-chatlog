import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-type';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatEntry, index) => {
        return (
            <ChatEntry key={index} sender={chatEntry.sender} body={chatEntry.body} timeStamp={chatEntry.timeStamp} id={chatEntry.id}/>
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
        key: PropTypes.index.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }))
}
export default ChatLog