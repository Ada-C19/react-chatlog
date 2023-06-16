import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const setLike = (id) => {
    setMessages((prev) => {
      return prev.map((entry) => {
        if (id === entry.id) {
          return {
            ...entry,
            liked: !entry.liked,
          };
        } else {
          return entry;
        }
      });
    });
  };
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <div className='widget' id='heartWidget'>3 ❤️s</div>
        <ChatLog entries={messages} onSetLike={setLike} />
      </main>
    </div>
  );
};

export default App;
