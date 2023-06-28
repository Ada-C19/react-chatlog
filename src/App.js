import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'

const App = () => {

  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
