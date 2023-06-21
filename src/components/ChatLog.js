import React, { Component } from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog =(props) => {
  
  // console.log(props)
  // console.log(props.allMessages)
  return props.entries.map((oneMessage) => {
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

  // ChatLog.propTypes = {
  //   entries: PropTypes.isRequired,
  // };
  ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ChatLog;