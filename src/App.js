import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  
  const totalLikes = messages.reduce((total, entry) => {
    total += entry.liked;
    return total;
  }, 0);

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
        <div className='widget' id='heartWidget'>{totalLikes}❤️s</div>
      </header>
      <main>
        <ChatLog entries={messages} onSetLike={setLike} />
      </main>
    </div>
  );
};

export default App;
