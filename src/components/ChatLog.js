import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdateChatData, localColor, remoteColor }) => {
  const getMessages = (entries) => {
    return entries.map((message) => {
      return (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdateChatData={onUpdateChatData}
          color={message.sender === 'Vladimir' ? remoteColor : localColor}
        />
      )
    })
  }
  return (
    <div>
      <ul className="chat-log">{getMessages(entries)}</ul>;
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onUpdateChatData: PropTypes.func.isRequired
};

export default ChatLog;