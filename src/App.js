import React from 'react';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog/ChatLog';
import './App.css';

const App = () => {
  const [chatLogs, setChatLogs] = useState(chatMessages);
  return (
    <section id='App'>
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatLogs} />
      </main>
    </section>
  );
};

export default App;
