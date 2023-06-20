import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const getChats = (entries) => {
    return entries.map((entry) => {
      return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          liked={entry.liked}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      )
    })
  }
    return (
        <div>
            <ul>
              {getChats(entries)}
            </ul>
        </div>
    );
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
  )
};

export default ChatLog;