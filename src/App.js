import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js'

const App = () => {
  const firstPerson = chatMessages[0].sender
  const secondPerson = chatMessages[1].sender
  return (
    <div id="App">
      <header>
        <h1>Chat between {firstPerson} and {secondPerson}</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry sender={firstPerson} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}></ChatEntry>
        {/* <ChatLog></ChatLog> */}
      </main>
    </div>
  );
};

export default App;
