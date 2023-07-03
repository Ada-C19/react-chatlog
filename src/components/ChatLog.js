import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, onLikeChange }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          onLikeChange={onLikeChange}
          liked={entry.liked}
        />
      ))}
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
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onLikeChange: PropTypes.func.isRequired,
};

export default ChatLog;

