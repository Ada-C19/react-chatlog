import React from 'react';
import chatMessages from '../data/messages.json';
import ChatEntry from './ChatEntry';

// renderChatLog returns a new array of msgs in JSX
const ChatLog = () => {
  return (
    chatMessages.map((message) => {
      return (
        <ChatEntry 
          sender = { message.sender }
          body = { message.body }
          timeStamp= { message.timeStamp }
        />
      )
    })
  )
}

export default ChatLog;
