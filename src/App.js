import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likedMessages, setLikedMessages] = useState(0);

  const handleLikeChange = (isLiked) => {
    setLikedMessages((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{likedMessages} ❤️</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLikeChange={handleLikeChange} />
      </main>
    </div>
  );
};

export default App;
