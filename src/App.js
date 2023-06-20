import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [totalLikes, setTotalLikes] = useState(0)

  const updateLikes = (liked) => {
    setTotalLikes((prevLikes) => prevLikes + (liked ? 1 : -1));
  };

  const addHearts = () => {
    let hearts = 0;

    for (let i = 0; i < totalLikes; i++) {
      hearts += 1
    }

    return hearts + ' ❤️s';
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div>Total Number of Likes: {addHearts()}</div>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes}
        />
      </main>
    </div>
  );
};

export default App;
