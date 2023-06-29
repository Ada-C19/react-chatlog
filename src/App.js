import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import {useState} from 'react';

const MESSAGES = chatMessages

const App = () => {
  const [entries, setEntries] = useState(MESSAGES)
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');
  const [userList, setUserList] = useState(['Vladimir', 'Estragon'])

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

  const changeColor = (user, color) => {
    if (user === userList[0]){
      setLocalColor(color);
    } else {
      setRemoteColor(color);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${userList[0]} and ${userList[1]}`}</h1>
        <div className="widget">
          <div className={localColor}><ColorChoice user={userList[0]} changeColor={changeColor}/></div>
          <h2 id="heartWidget">{countHearts()} ❤️s</h2>
          <div className={remoteColor}><ColorChoice user={userList[1]} changeColor={changeColor}/></div>
        </div>
      </header>
      <main>
        <div><ChatLog entries ={entries} updateHeart={updateHeart} localColor={localColor} remoteColor={remoteColor} userList={userList}/></div>
      </main>
    </div>
  );
};

export default App;
