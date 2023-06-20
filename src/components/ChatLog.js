import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return props.entries.map((message) => (
        <ChatEntry
            key={message.id}
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            updateEntry={props.updateChatData}
        />
      ))
    }

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  updateChatData: PropTypes.func.isRequired
};

export default ChatLog


