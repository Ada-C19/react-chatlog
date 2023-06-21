import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);

  const updateLikeData = updatedLike => {
    const newLike = entryData.map(entry => {
      if (entry.id === updatedLike.id) {
        return updatedLike;
      } else {
        return entry;
      }
    });
    setEntryData(newLike);
  };

  const likeCount = (entryData) => {
    let likeNumber = 0
    for (let entry of entryData) {
      if (entry.liked) {
        likeNumber += 1;
      }
    }; return likeNumber
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section id='LikeCount' >{likeCount(entryData)} 🖤s</section>
      </header>
      <main>
        <ChatLog 
          entries = {entryData} 
          updateLikeData = {updateLikeData}
        />
      </main>
      <footer>&copy; WhatsAnaApp 2023</footer>
    </div>
  );
};

export default App;