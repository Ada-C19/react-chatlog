import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';


const App = () => {
  const [chatMessageData, setChatMessages] = useState(chatMessages);

  const updateChatMessages = updatedMessage => {
    const chats = chatMessageData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatMessages(chats);
  };


  let likes = 0;
  for (let message of chatMessageData ){
    if (message.liked) {
      likes++;
    }
  }


  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
        <h3>Likes: {likes} ❤️s  </h3>
      </header>
      <main>
        <ChatLog entries={chatMessageData} onUpdateChat={updateChatMessages}> </ChatLog>
      </main>
    </div>
  );
};

export default App;
