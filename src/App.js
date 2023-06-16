import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  return (
    <div id='App'>
      <header>
        <h1>Updating for Godot</h1>
      </header>
      <main>
        <ChatLog className='chat-log' entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
