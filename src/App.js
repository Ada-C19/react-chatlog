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

  const senderOne = messages[0]['sender'];
  const senderTwo = messages[1]['sender'];

  return (
    <div id="App">
      <header>
        <h1>Chat between { senderOne } and { senderTwo }</h1>
        <section id="heart"> { likesCount } ❤️s </section>
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
