import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);

  const updateLikesCount = (liked) => {
    setLikesCount(likesCount + (liked ? 1 : -1));
  };

  return (
    <div id="App">
      <header>
        <h1>{likesCount} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} onClickLike={updateLikesCount} />
      </main>
    </div>
  );
};

export default App;
