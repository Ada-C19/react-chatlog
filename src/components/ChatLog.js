import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  // console.log(`messages: ${props.entries}`);
  const messages = props.entries;

  const chatComponents = messages.map((message) => {
    return (
      <div key={message.id} >
        <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </div>
    );
  });

  return (<section className='chat-log'>
    {chatComponents}
  </section>)
};

export default ChatLog;