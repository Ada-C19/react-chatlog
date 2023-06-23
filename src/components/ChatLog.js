import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onUpdateEntryData, updateLikes }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          key={entry.id}
          liked={entry.liked}
          onUpdateEntryData={onUpdateEntryData}
          updateLikes={updateLikes}
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
      liked: PropTypes.bool
    })),
    onUpdateEntryData: PropTypes.func.isRequired,

};

export default ChatLog;
