import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const handleLike = (id) => {
    setChatData((prev) => {
      return prev.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
        return chat;
        }
      });
    });
  };

  const heartCount = () => {
    return chatData.reduce((total, chat) => {
      return chat.liked ? total + 1 : total;
    }, 0)
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir & Estragon</h1>
        <section className="App header section"> {heartCount()} ❤️s</section>
      </header>
      <main>
        <ChatLog 
            entries={chatData}
            onLike={handleLike}
        />
      </main>
    </div>
  );
};

export default App;
