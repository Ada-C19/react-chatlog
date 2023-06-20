import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [heartCount, setHeartCount] = useState(0);

  const like = (id) => {
    const chats = chatData.map(chat => {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
      return chat;
    });
    setChatData(chats);
    countHearts();
  };

  const countHearts = () => {
    let currentHeartCount = 0;
    for (const chat of chatData) {
      if (chat.liked) {
        currentHeartCount += 1;
      }
    }
    setHeartCount(currentHeartCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir & Estragon</h1>
        <section className="App header section">{heartCount} ❤️s</section>
      </header>
      <main>
        <ChatLog 
            entries={chatData}
            onLike={like}
        />
      </main>
    </div>
  );
};

export default App;
