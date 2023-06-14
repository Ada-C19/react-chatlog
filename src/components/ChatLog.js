import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  return (
    <div className="chat-entry local">
      <ChatEntry sender={entries.sender} body={entries.body} timeStamp={entries.timeStamp}></ChatEntry>
    </div>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      body: PropTypes.string
    })
  )

};

export default ChatLog;
