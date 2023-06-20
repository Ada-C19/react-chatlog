import React, { useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import './App.css';

const App = () => {
  const initialCopy = chatMessages.map((chatEntry) => {
    return { ...chatEntry };
  });

  const [chatData, setChatData] = useState(initialCopy);
  const [likeCount, setLikeCount] = useState(0);

  const updateLikes = (chatEntryId) => {
    const updatedChatData = chatData.map((chatEntry) => {
      if (chatEntry.id === chatEntryId) {
        return {
          ...chatEntry,
          liked: !chatEntry.liked,
        };
      }
      return chatEntry;
    });
    setChatData(updatedChatData);
    updateLikeCount(updatedChatData);
  };

  const updateLikeCount = (updatedChatData) => {
    const count = updatedChatData.reduce(
      (total, chatEntry) => total + (chatEntry.liked ? 1 : 0),
      0
    );
    setLikeCount(count);
  };

  return (
    <div className="App">
      <header>
        <h1>🤖 When Bots Collide 🤖 </h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
