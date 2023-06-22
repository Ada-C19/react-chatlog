import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);

  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
        <h2 className="like-count">{likesCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} likesCount={likesCount} increaseLikes={increaseLikes}/>
      </main>
    </div>
  );
};

export default App;
