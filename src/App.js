import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);


  const updateChatData = (updatedChat) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedChat.id) {
        if (entry.liked !== updatedChat.liked) {
          const likeCountChange = updatedChat.liked ? 1 : -1;
          setLikeCount((prevCount) => prevCount + likeCountChange);
        }
        return updatedChat;
      } else {
        return entry;
      }
    });
    setChatData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartWidget">{likeCount} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          updateChatData={updateChatData}
          likeCount={likeCount}
        />
      </main>
    </div>
  );
};

export default App;
