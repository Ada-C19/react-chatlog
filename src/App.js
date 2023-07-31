import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);

  const likeChangeHandler = (liked) => {
    if (liked) {
      setTotalLikes((prevTotal) => prevTotal + 1);
    } else {
      setTotalLikes((prevTotal) => prevTotal - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p> Total Likes: {totalLikes} ❤️ </p>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} onLikeChange={likeChangeHandler} />
      </main>
    </div>
  );
};

export default App;
