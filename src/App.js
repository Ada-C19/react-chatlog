import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log Between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatEntries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
