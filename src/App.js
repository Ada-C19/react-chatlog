import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <h2>0 ❤️s</h2>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
