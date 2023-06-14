import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp.js'
// // import chatMessages from './data/messages.json';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  console.log(props)
    return props.entries.map((message, index) => (
        <ChatEntry
            key={index}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
          // liked={message.liked}
        />
      ))
    }

export default ChatLog


