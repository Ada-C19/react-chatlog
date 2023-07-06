import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {

  const [messages, setMessages] = useState(chatMessages);

  const handleLikeToggle = (id) => {
    setMessages(messages => {
      return messages.map(message => {
        if (message.id === id) {
          return {
            ...message,
            liked: !message.liked
          };
        } else {
          return message;
        }
      });
    });
  };

  const totalLikeTally = messages.reduce((total, message) => {
    if (message.liked) {
      total += 1;
    };
    return total;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
        <h2>{totalLikeTally} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} handleLikeToggle={handleLikeToggle}/>
      </main>
    </div>
  );
};

export default App;
