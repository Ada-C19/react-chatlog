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
        />
      ))
    }

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired
};

export default ChatLog


