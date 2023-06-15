import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log('chat messages in app.js:', chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <ChatEntry></ChatEntry>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatMessages = {chatMessages} />
      </main>
    </div>
  );
};

export default App;
