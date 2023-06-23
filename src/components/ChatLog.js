import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
// import timestamp component

const ChatLog = ({entries, toggleLike}) => {
    const chatComponents = entries.map(chatInstance => {
        return(
            <li key={chatInstance.id}>
                <ChatEntry
                id={chatInstance.id}
                sender={chatInstance.sender}
                body={chatInstance.body}
                liked={chatInstance.liked}
                timeStamp={chatInstance.timeStamp}
                toggleLike={toggleLike}>
                </ChatEntry>
            </li>
        )
    })
    return (
        <section>
            <ul>
                {/* get rid of bullets */}
                {chatComponents}
            </ul>
        </section>
    );
};

ChatLog.propTypes = {
    chatEntries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            timeStamp: PropTypes.string.isRequired
            })
        ),
    toggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
