import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const updateEntryData = updatedEntry => {
    const entries = entryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        toggleLike(updatedEntry.liked);
        return updatedEntry;
      } else {
        return entry;
      }
    });

    setEntryData(entries);

  };

  
  const toggleLike = (liked) => {
    if (liked) {
      setLikeCount(likeCount+1);
    } else {
      setLikeCount(likeCount-1);
    }
  };


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
