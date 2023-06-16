import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
  return <div className='chat-log '>
    {/* <ChatEntry onSetLike={props.onSetLike} /> */}
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



export default ChatLog;