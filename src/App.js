import { useState } from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

import  './components/ChatLog.css';

const messageData = [
  {
    id: 1,
    sender: 'Jeff',
    body: 'Howdy duty',
    timeStamp: '',
  },
  {
    id: 2,
    sender: 'Blade',
    body: 'MF',
    timeStamp: '',
  },
  {
    id: 3,
    sender: 'ChinPo',
    body: 'Beef, Pork, Chicken ..mmm',
    timeStamp: '',
    },
  {
    id: 4,
    sender: 'King of the Rock',
    body: 'Slipped right through my fingers',
    timeStamp: '',
 }, 
 {
  id: 5,
  sender: 'Trio',
  body: 'Hardy har har',
  timeStamp: '',
},

];

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
            sender= 'Tweety'
            body= 'Tweet-Tweet-MF'
            timeStamp= 'MMMM Do YYYY, h:mm:ss a'
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
