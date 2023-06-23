import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const handleLike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === id) {
          return {
            ...message,
            liked: !message.liked,
          };
        }
        return message;
      })
    );
  };

  const likedMessages = messages.filter((message) => message.liked);
  const likesCount = likedMessages.length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{likesCount} ❤️s</p> {/* Display the likes count separately */}
      </header>
      <main>
        <ChatLog entries={messages} handleLike={handleLike} />
      </main>
    </div>
  );
};

export default App;