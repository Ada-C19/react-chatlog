import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)

  const onLike = id => {
    setMessages((oldMessages) => {
      return oldMessages.map((message) => {
        if (id === message.id) {
          return {...message, liked: !message.liked};
        } else {
          return message;
        };
      })
    })
  }

  const calcTotalLikes = (messages) => {
    let likedTally = 0;
    for (let message of messages) {
      if (message.liked) likedTally++; 
    };
    return likedTally
  }

  const totalLikesTally = calcTotalLikes(messages);


  return (
    <div id="App">
      <header>
        <h1>Nadia's ChatLog</h1>
        <h2>Total ❤️s: {totalLikesTally}</h2>
      </header>
      <main>
        <ChatLog entries={messages} onClick={onLike}/>
      </main>
    </div>
  );
};

export default App;
