import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './components/ChatEntry';

const ChatLog = (props) => {

    const chatEntryComponents = props.entries.map(entry => {
        return (
            <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
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
        timeStamp: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
}
export default ChatLog;