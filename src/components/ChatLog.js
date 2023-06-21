import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return <div className='chat-log'>
    {props.entries.map((message) => (
      <ChatEntry
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        id={message.id}
        key={message.id}
        liked={message.liked}
        onSetLike={props.onSetLike}
      />
    ))
    }
  </div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
    ).isRequired,
    onSetLike: PropTypes.func
};


export default ChatLog;