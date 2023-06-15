import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);
  const updateEntryData = updatedEntry => {
    const entries = entryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });

    setEntryData(entries);
  };

  let likeCount = 0;
  const countLikes = () => {
    for (let entry of entryData) {
      if (entry.liked === true) {
        likeCount++;
      }
    }
  };
  countLikes();

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
        <div id="heartWidget" className="widget">{likeCount} ❤️s</div>
        </section>
      </header>
      <main>
        <ChatLog 
        entries={entryData}
        onUpdateEntry={updateEntryData} />
      </main>
    </div>
  );
};

export default App;
