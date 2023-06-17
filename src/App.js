import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likes, setLikes] = useState(0);
  const incrementLikes = () => {
    setLikes(likes + 1);
  }
  const decrementLikes = () => {
    setLikes(likes - 1);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{likes} ❤️s</h2>    
      </header>
      <main>
          <ChatLog entries={chatMessages} incrementLikes={incrementLikes} decrementLikes={decrementLikes} />
      </main>
    </div>
  );

  };
export default App;
