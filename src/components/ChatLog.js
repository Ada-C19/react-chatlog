import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry, index) => {
        return (
            <li key={index}>
                <ChatEntry 
                    id={entry.id} 
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}>
                </ChatEntry>
            </li>
        );
    });

    return (
        <section classname="chat-log">
            <ul>{chatEntryComponents}</ul>
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ),
};

export default ChatLog;