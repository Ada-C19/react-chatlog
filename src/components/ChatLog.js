import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  const {chatMessages, updateLikes} = entries;

  return (
    <div className="chat-entry local">
      {
        chatMessages.map(entry => (
          <ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} updateLikes={updateLikes}></ChatEntry>
        ))
      }
    </div>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool
    })
  )

};

export default ChatLog;
