import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [messages] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);

  const updateLikesCount = (messageToUpdate) => {
    messages.forEach((message) => {
      if (message.id === messageToUpdate.id) {
        // Check if 'liked' is true
        if (messageToUpdate.liked) {
          setLikesCount(likesCount + 1);
        } else {
          setLikesCount(likesCount - 1);
        };
      };
    });
  };

  return (
    <div id="App">
      <header>
        <h1> { likesCount } ❤️s </h1>
      </header>
      <main>
        <ChatLog 
          entries={ chatMessages } 
          onUpdateMessage={ updateLikesCount }
        />
      </main>
    </div>
  );
};

export default App;
