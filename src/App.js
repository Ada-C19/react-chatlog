import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {

  const entryData = chatMessages;

  const [chatData, setChatData] = useState(entryData);

  const updateEntryData = updatedEntry => {
    const entries = chatData.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatData(entries)
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartWidget">❤️s</h2>
        </section>
      </header>
      <main>

        {/* <ChatEntry {...chatMessages[0]}></ChatEntry> */}
        <ChatLog 
        entries={entryData}
        onUpdateEntry={updateEntryData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
