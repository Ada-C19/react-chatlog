import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onLikeMessage, senders }) => {
  const isFirstSender = (senderName, arr) => {
    return senderName === arr[0];
  };
  return entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        liked={entry.liked}
        timeStamp={entry.timeStamp}
        onLike={onLikeMessage}
        color={entry.color ? entry.color : ''}
        firstSender={isFirstSender(entry.sender, senders)}
      />
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      timeStamp: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
  onLikeMessage: PropTypes.func.isRequired,
  senders: PropTypes.arrayOf(PropTypes.string),
};

export default ChatLog;
