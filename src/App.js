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
        <h1>Chicken Chat Log</h1>
      </header>
      <main>
        <div className='chicken-counter'>You have {entries.reduce((accumulator, entry) => entry.liked ? accumulator = accumulator + 1 : accumulator, 0)} chicken(s) </div>
        <div className='chicken-fren'><img src="https://em-content.zobj.net/source/microsoft-teams/363/chicken_1f414.png" srcSet="https://em-content.zobj.net/source/microsoft-teams/363/chicken_1f414.png 2x" alt="Chicken on Microsoft Teams 15.0" width="160" height="160"></img></div>
        <div>{<ChatLog entries={entries} likeMessage={likeMessage}/>}</div>
      </main>
    </div>
  );
};

export default App;
