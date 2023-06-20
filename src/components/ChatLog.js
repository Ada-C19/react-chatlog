import React, { Component } from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog =(props) => {
  
  return props.allMessages.map((oneMessage) => {
    return (
      <ChatEntry
        sender={oneMessage['sender']}
        body={oneMessage['body']}
        timeStamp={oneMessage['timeStamp']}
        id={oneMessage['id']}
        liked={oneMessage['liked']}
    ></ChatEntry>
    )
  })
  }

  ChatLog.propTypes = {
    allMessage: PropTypes.array.isRequired,
  };

export default ChatLog;