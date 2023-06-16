import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return (
        <section>
            {props.entries.map((message) => {
                return (
                    <ChatEntry 
                        sender={message.sender}
                        body={message.body}
                        timeStamp={message.timeStamp}
                    />
            )})}
        </section>
    );
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
};

export default ChatLog;