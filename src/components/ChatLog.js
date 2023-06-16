import React from 'react';
import './ChatLog.css';
import ChatEntry from '../components/ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((message) => {
      return <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} key={message.id} />
      
    })
};

export default ChatLog;