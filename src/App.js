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

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
        <div id="heartWidget" className="widget">0 ❤️s</div>
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
