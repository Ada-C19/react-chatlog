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

const totalOfHearts = (chatData) => {
  let total = 0;
  for (const element of chatData) {
    if (element.liked === true) {
      total += 1;
    }
  }
  return total;
};

const allHearts = totalOfHearts(chatData);

  return (
    <div id="App">
      <header>
        {allHearts} ❤️s
        {/* <h1>Robo Convo's</h1> */}
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChatData={updateChatData} ></ChatLog>
      </main>
    </div>
  );
};

export default App;
