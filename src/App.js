import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [totalLikes, setTotalLikes] = useState(0);

  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>

      <main>
        <ChatLog 
          entries={chatMessages}
          onLike={incrementTotalLikes}
        />
      </main>

      <p>{totalLikes} ❤️s</p>

    </div>
  );
}

export default App;
