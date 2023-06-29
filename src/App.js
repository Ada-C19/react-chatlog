import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const calculateTotalLikes = (messages) => {
    return messages.reduce((totalLikes, message) => {
      if (message.liked) {
        return totalLikes + 1; 
      }
      return totalLikes;
    }, 0); 
  };
  
  const totalLikes = calculateTotalLikes(messages);

  const handleLikeClicked = (id) => {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    });
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Messages</h1>
        <p>{totalLikes} ❤️s</p>

      </header>
      <main>
        <ChatLog
          entries={messages} 
          onLikeChange={handleLikeClicked}
        />
      </main>
    </div>
  );
};

export default App;
