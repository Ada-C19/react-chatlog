import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  const {chatMessages} = entries;

  return (
    <div className="chat-entry local">
      {
        chatMessages.map(entry => (
          <ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
        ))
      }
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
