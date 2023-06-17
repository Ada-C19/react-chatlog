import React from 'react';
import { useState } from 'react';
import './ChatLog.css';
import ChatEntry from '../components/ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((message) => {
      return <ChatEntry incrementLikes={props.incrementLikes} decrementLikes={props.decrementLikes} sender={message.sender} body={message.body} timeStamp={message.timeStamp} key={message.id} />
      
    })
};

export default ChatLog;