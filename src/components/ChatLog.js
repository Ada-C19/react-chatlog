import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
// import PropTypes from 'prop-types';

const ChatLog = ({entries, onLikeMessage}) => {
  // const messages = props.entries;

  const chatComponents = entries.map((message) => {
    return (
      <div key={message.id} >
        <ChatEntry 
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          isLiked={message.liked}
          onLikeMessage={onLikeMessage}
        />
      </div>
    );
  });

  return (<section className='chat-log'>
    {chatComponents}
  </section>)
};

export default ChatLog;