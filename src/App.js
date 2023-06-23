import React from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [messages, setMessages] = useState(entries);

  const handleLikeToggle = (id) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) => {
        if (id === message.id) {
          return {
            sender: message.sender,
            body: message.body,
            timeStamp: message.timeStamp,
            liked: !message.liked,
            id: message.id,
          };
        } else {
          return message;
        }
      });
      return updatedMessages;
    });
  };

  const totalLikedCount = messages.filter((message) => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Between {entries[0].sender} and {entries[1].sender}</h1>
        <h2>{totalLikedCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={messages}
          onLikeToggle={handleLikeToggle}
        />
      </main>
    </div>
  );
};

export default App;
