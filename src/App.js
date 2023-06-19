import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [entriesData, setEntriesData] = useState(chatMessages);

  const updateLike = (entryUpdate) => {
    const updatedEntries = entriesData.map(entry => {
      if (entry.id === entryUpdate.id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    });
    setEntriesData(updatedEntries)
  }

  const countLikes = entriesData.filter((entry) => entry.liked).length;


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{`${countLikes} ❤️s`}</p>
      </header>
      <main>
        <ChatLog 
          entries={chatMessages}
          updateLike={updateLike}/>
      </main>
    </div>
  );
};

export default App;
