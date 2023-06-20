import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
// import timestamp component

const ChatLog = (props) => {
  const chatComponents = props.chatEntries.map(chatInstance => {
    return(
        <li key={chatInstance.id}>
            <ChatEntry
            id={chatInstance.id}
            sender={chatInstance.sender}
            body={chatInstance.body}
            timeStamp={chatInstance.timeStamp}>
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
            timeStamp: PropTypes.string.isRequired
        })
    )};

export default ChatLog;
