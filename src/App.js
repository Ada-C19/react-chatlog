import React from 'react';
import ChatLog from './components/ChatLog.js';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const[entries, setEntries] = useState(chatMessages);
  const likeMessage = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updateEntry = {...entry};
        updateEntry.liked = !entry.liked;
        return updateEntry;
      } else {
        return entry;
      }
    });
    setEntries(updatedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Robot Chat Log</h1>
      </header>
      <main>
        <div>{<ChatLog entries={chatMessages} likeMessage={likeMessage}/>}</div>
      </main>
    </div>
  );
};

export default App;
