import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Nadia's ChatLog</h1>
      </header>
      <main>
        <ChatLog entries={messages}/>
      </main>
    </div>
  );
};

export default App;
