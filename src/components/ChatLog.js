import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const {entries} = props;
  const chatMessages = entries.map((message, index) => (
    <ChatEntry 
      key={index}
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
    />
  ));

  return (
    <section>{chatMessages}</section>
  );
};

export default ChatLog;