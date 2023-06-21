import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ chatMessages, increaseLikes }) => {

  const chatComponents = chatMessages.map((message)=> {
    // console.log('sender', message.sender)
    // console.log('body', message.body)
    // console.log('timeStamp', message.timeStamp)
    // console.log('id ', message.id)
    // console.log('liked', message.liked)

    return (
    <ChatEntry
      key = {message.id}
      id = {message.id}
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
      liked = {message.liked}
      increaseLikes={increaseLikes}
    />
    )})

  return (
    <div className='chat-log'>
      {chatComponents}
    </div>
  )
};

export default ChatLog;
