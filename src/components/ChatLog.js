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
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateChatData: PropTypes.func
};

export default ChatLog


