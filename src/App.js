import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likedMessages, setLikedMessages] = useState(0);

  const likeMessage = () => {
    setLikedMessages(likedMessages => likedMessages + 1);
  };

  const unlikeMessage = () => {
    setLikedMessages(likedMessages => likedMessages - 1);
  };
  
  return (
    <div id="App">
      <header>
        <h1>Chat Messages</h1>
        <h2>{likedMessages} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          likeMessage={likeMessage}
          unlikeMessage={unlikeMessage}
        />
      </main>
    </div>
  );
};

export default App;
