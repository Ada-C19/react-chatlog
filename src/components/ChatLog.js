import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry) => {
        return (
            <li key={entry.id}>
                <ChatEntry 
                    id={entry.id} 
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onUpdate={props.onUpdateChatData}
                ></ChatEntry>
            </li>
        );
    });

    return (
        <section className="chat-log">
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
            liked: PropTypes.bool,
        })
    ),
    onUpdateChatData: PropTypes.func.isRequired
};

export default ChatLog;