import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  // const updateChatMesagges = updatedMessage => {
  //   const chats = chatMessages.map(message => {
  //     if (message.id === updatedMessage.id) {
  //       return updatedMessage;
  //     } else {
  //       return message;
  //     }
  //   });
  //   setChatMessages(chats);
  // };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}> </ChatLog>
      </main>
    </div>
  );
};

export default App;
