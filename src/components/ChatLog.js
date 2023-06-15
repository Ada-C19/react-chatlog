import React from 'react';
import ChatEntry from './ChatEntry';


const ChatLog = chatMessages => {
  console.log(chatMessages)

  const chatComponents = chatMessages.map(chat => {
    return (
      <ChatEntry
      sender = {chat.sender}
      body = {chat.body}
      timestamp = {chat.timeStamp}
      liked = {chat.like}
      />
    )
  })

  return (
    {chatComponents}
  )
};

export default ChatLog;