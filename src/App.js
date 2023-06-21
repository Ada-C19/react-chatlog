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

  const getNames = logs => {
    const namesSet = new Set(logs.map(data => data.sender));
    return [...namesSet];
  };

  const namesString = getNames(chatLogs).join(' and ');
  const local = getNames(chatLogs)[0];

  return (
    <section id='App'>
      <header>
        <h1 className='chat-description'>Chat between {namesString}</h1>
        {likesCount ? <p className='like-display'>{likesCount} ❤️s</p> : <></>}
      </header>
      <main>
        <ChatLog entries={chatLogs} updateLike={updateLike} local={local} />
      </main>
    </section>
  );
};

export default App;
