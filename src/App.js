import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const DATA = {
  id: 1,
  sender:'Vladimir',
  body:'why are you arguing with me',
  timeStamp:'2018-05-29T22:49:06+00:00',
  liked: false
}

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>ChatBug</h1>
      </header>
      <main>
        <div><ChatLog entries={chatData}></ChatLog></div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
