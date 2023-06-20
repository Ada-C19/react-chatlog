import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

    const [entries, setEntries] = useState(chatMessages);
    let likeCount = 0;

    const updateLiked = (id) => {
      const updatedEntries = entries.map((message) => {
        if (message.id === id) {
          return {
            id: message.id, 
            sender: message.sender, 
            body: message.body,
            timeStamp: message.timeStamp,
            liked: !message.liked
          };
        } return message;
        });
        setEntries(updatedEntries);
      };

    const getLikeCount = () => {
      for (let entry of entries) {
        if (entry.liked) {
          likeCount += 1;
        }
      } return likeCount;
    }
      
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estagon</h1>
        <h2>  {getLikeCount()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
