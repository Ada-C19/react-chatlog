import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* <ChatEntry firstMessage={firstMessage}></ChatEntry> */}
        <ChatLog entries={chatMessages}></ChatLog>
        {/* Wave 01: Render one ChatEntry component */}
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
