import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';


const App = () => {
  const [chatData, setChatData] = useState(chatMessages);


  const updateChatData = (id) => {
      setChatData ((chatData) => 
      chatData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }}));
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChatData={updateChatData} ></ChatLog>
      </main>
    </div>
  );
};

export default App;
