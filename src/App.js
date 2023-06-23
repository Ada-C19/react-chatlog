import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0); 

  const handleLikeCount = (liked) => {
    setTotalLikes((totalLikes) => liked ? totalLikes + 1 : totalLikes - 1); 
  };

  return (
    <div id="App">
      <header>
        <h1>Messages</h1>
        <p>{totalLikes} ❤️s</p>

      </header>
      <main>
        <ChatLog
          entries={chatMessages} 
          onLikeChange={handleLikeCount}
        />
      </main>
    </div>
  );
};

export default App;
