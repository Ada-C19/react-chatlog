import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [likes, setLikes] = useState(0)

  const updateLikeStatus = (entryId) => {
    const updatedEntries = chatData.map(entry => {
      if (entry.id === entryId) {
        return {
          ...entry,
          liked: !entry.liked
        }
      };
      return entry;
    });

    setChatData(updatedEntries);
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <section id="likes">
          {likes} ❤️'s
        </section>
        <ChatLog entries={chatData} updateLikeStatus={updateLikeStatus} />
      </main>
    </div>
  );
};

export default App;
