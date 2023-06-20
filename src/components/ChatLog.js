import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const getChatLogJSX = (entries) => {
    return entries.map((entry) => {
      return (
        <ChatEntry
          id={entry.id}
          liked={entry.liked}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(entries)}</ul>;
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            liked: PropTypes.bool.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default ChatLog;