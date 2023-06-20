import React, { useState }  from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLikeClick = () => {
    setTotalLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} handleLikeClick={handleLikeClick}/>
      </main>
      <div>Total Likes: {totalLikes} ❤️</div>
    </div>
  );
};

export default App;