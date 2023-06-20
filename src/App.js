import React from 'react';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog/ChatLog';
import './App.css';

const App = () => {
  const [chatLogs, setChatLogs] = useState(chatMessages);
  const [likesCount, setlikesCount] = useState(0);

  const updateLike = logToUpdate => {
    const updatedLogs = chatLogs.map(log => {
      if (log.id === logToUpdate.id) {
        logToUpdate.liked
          ? setlikesCount(likesCount + 1)
          : setlikesCount(likesCount - 1);
        return logToUpdate;
      }
      return log;
    });
    setChatLogs(updatedLogs);
  };

  const updateLikesCount = currentCount => setlikesCount();

  const names = [];
  return (
    <section id='App'>
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        {likesCount ? <p>{likesCount} ❤️s</p> : <></>}
      </header>
      <main>
        <ChatLog
          entries={chatLogs}
          updateLike={updateLike}
          updateLikesCount={updateLikesCount}
        />
      </main>
    </section>
  );
};

export default App;
