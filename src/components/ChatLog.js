import React from 'react';
import chatMessages from '../data/messages.json'
import ChatEntry from './ChatEntry';


const ChatLog = ({ chatMessages }) => {
  // console.log(entries)
  // const datas = chatMessages;

  const chatComponents = chatMessages.map(data => {
    return (
    <ChatEntry
      sender={data.sender}
      body={data.body}
      timeStamp={data.timeStamp}
      
    />
    )})

  return (
    <div>
    {chatComponents}
    </div>
  )
};

export default ChatLog;