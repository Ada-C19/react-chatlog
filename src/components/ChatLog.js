import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const chatComponents = props.entries.map(entry => {
    return (
      <ChatEntry
      key={entry.id} 
      id={entry.id}  
      sender={entry.sender}
      body={entry.body}
      liked={entry.liked}
      timeStamp={entry.timeStamp}
      updateLikedCount={props.updateLikedCount}/>
      );
    });
    return (
      <div>
        {chatComponents}
      </div>
  );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    }))
};

export default ChatLog;