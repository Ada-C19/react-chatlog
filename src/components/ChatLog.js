import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onSetLike, localSender, remoteSender}) => {
  entries.forEach((msg) => {
    msg.local = msg.sender === localSender?.name
    msg.color = msg.local ? localSender?.color : remoteSender?.color;
  });

  return (
    <div className="chat-log">
      {entries.map((msg) => {
        return (
        <ChatEntry
          {...msg}
          key={msg.id}
          onSetLike={onSetLike}
        />
        );
      })}
    </div>
  );
};

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
  localSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  remoteSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  onSetLike: PropTypes.func,
};

export default ChatLog;
