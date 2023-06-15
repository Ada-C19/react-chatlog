import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ chatMessages }) => {
  // console.log("chatMessages in chatlog", chatMessages);
  // console.log("chatmessages.chatmessages:", chatMessages.chatMessages);

  const chatComponents = chatMessages.map((chat) => {
    console.log(chat);
    return (
      <ChatEntry
        key = {chat.id}
        sender={chat.sender}
        body={chat.body}
        timestamp={chat.timeStamp}
        liked={chat.like}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

export default ChatLog;
