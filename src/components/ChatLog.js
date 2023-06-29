import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const messages = props.entries;

  const chatComponents = messages.map((message) => {
    return (
      <div key={message.id} >
        <ChatEntry 
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          onLikeMessage={props.onLikeMessage}
          isLiked={message.liked}
        />
      </div>
    );
  });

  return (<section className='chat-log'>
    {chatComponents}
  </section>)
};

export default ChatLog;