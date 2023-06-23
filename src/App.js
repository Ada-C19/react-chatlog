import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLikeCount = (id, liked) => {
    setTotalLikes((prevLikes) => (liked ? prevLikes + 1 : prevLikes - 1));
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon</h1>
        <p>{totalLikes} {totalLikes === 1 ? '❤️' : '❤️s'}</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLikeChange={handleLikeCount} />
      </main>
    </div>
  );
};

export default App;

