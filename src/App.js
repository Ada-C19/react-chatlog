import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [entries, setEntriesData] = useState(chatMessages);
  const updateLikedCount = (id) => {
    setEntriesData((prev) => {
      return prev.map((entry) => {
        if(id === entry.id) {
          return {
            ...entry,
            liked: !entry.liked,
          };        } else {
          return entry;
        }
      });
    });
  }
  const totalLikesTally = entries.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }
    return total;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>🤖 Chatterbot 🤖</h1>
        <section className='header section'>{totalLikesTally} ❤️s</section>
      </header>
      <main>
        <ChatLog 
        className='chat-log' 
        entries={entries}
        updateLikedCount={updateLikedCount}/> 
      </main>
    </div>
  );
};

export default App;