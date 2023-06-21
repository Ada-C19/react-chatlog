import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
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

  const storeUsers = () => {
    const list = [];
    for (let entry of entries) {
      if (list.includes(entry.sender) === false) {
        list.push(entry.sender)
      }
    };
    return list;
  }

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${storeUsers()[0]} and ${storeUsers()[1]}`}</h1>
        <h2 id="heartWidget">{countHearts()} ❤️s</h2>
      </header>
      <main>
        <div><ChatLog entries ={entries} updateHeart={updateHeart}/></div>
      </main>
    </div>
  );
};

export default App;
