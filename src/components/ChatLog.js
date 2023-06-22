import React from 'react';
import './ChatLog.css'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, increaseLikes }) => {

  const chatComponents = entries.map((message)=> {

    return (
    <ChatEntry
      key = {message.id}
      id = {message.id}
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
      liked = {message.liked}
      increaseLikes={increaseLikes}
    />
    );
  });

  return (
    <div className='chat-log'>
      {chatComponents}
    </div>
  );
};

ChatLog.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.any.isRequired,
      liked: PropTypes.bool.isRequired
  })
  ).isRequired,
  increaseLikes: PropTypes.func.isRequired
}

export default ChatLog;
