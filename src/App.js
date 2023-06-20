import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react';

const MESSAGES = chatMessages

const App = () => {
  const [entries, setEntries] = useState(MESSAGES)

  const updateHeart = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = { ...entry };
        updatedEntry.liked = !updatedEntry.liked;
        return updatedEntry
      }
      else {
        return { ...entry };
      }
    });
    setEntries(newEntries);
  };

  const countHearts = () => {
    let hearts = 0
    for (let entry of entries) {
      if (entry.liked === true) {
        hearts++;
      }
    };
    return hearts;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <h2>{countHearts()} ❤️s</h2>
        <div><ChatLog entries ={entries} updateHeart={updateHeart}/></div>
      </main>
    </div>
  );
};

export default App;
