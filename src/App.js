import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import Chats from './data/messages.json';


const App = () => {
  const [chatMessages, setChatMessages] = useState(Chats);

  const heartClick = (entryToUpdate) => {
    const entries = chatMessages.map((message) => {
      if (message.id === entryToUpdate.id){
        return entryToUpdate;
      }
      return message;
    });
    setChatMessages(entries);
  };

  const countLikes = (chatMessages) => {
    let likeCount = 0;
    for(const message of chatMessages){
      if (message.liked=== true){
        likeCount++;
      }
    };
    return likeCount;
  };
  const heartTotal = countLikes(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>Total Likes: {heartTotal} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} heartClick= {heartClick}></ChatLog>
      </main>
      
    </div>
  );
};

export default App;
