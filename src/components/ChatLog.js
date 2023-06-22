import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
    <ul>
    {props.entries.map((chat) => (
      <ChatEntry
      id={chat.id}
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
      // liked{chat.liked}
      onUpdateChatData={props.onUpdateChatData}
      key={chat.id}
      />
    ))}
      </ul>
    </div>
  );
};

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired
    })
  ),
  updateChatData: PropTypes.func.isRequired
};

export default ChatLog;