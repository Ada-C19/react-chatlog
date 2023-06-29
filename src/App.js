import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [messages, setMessages] = useState(chatMessages)

  const updateLikes = (messageId) => {
    setMessages((prevMessages)=>
      prevMessages.map((message)=>
        message.id === messageId ? { ...message, likes: !message.likes } : message
        )
      );
    };


  const getTotalLikes = () => {
    return messages.reduce((total, message) => total + (message.likes ? 1 : 0), 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir's Phone</h1>
        <div>Total Number of Likes: {getTotalLikes()} ❤️s</div>
      </header>
      <main>
        <ChatLog entries={messages} updateLikes={updateLikes}
        />
      </main>
    </div>
  );
};

export default App;
