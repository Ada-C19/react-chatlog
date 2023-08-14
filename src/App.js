import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);

  const handleLikeChange = (isLiked) => {
    // Increment or decrement based on the liked status
    setTotalLikes(prevTotalLikes => isLiked ? prevTotalLikes + 1 : prevTotalLikes - 1);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <p>{totalLikes} ❤️s</p>  {/* Moved the total likes display to the top */}
      </header>

      <main>
        <ChatLog 
          entries={chatMessages}
          onLike={handleLikeChange}
        />
      </main>

    </div>
  );
}

export default App;
