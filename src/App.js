import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeUpdate = (id) => {
    setMessages(messages => {
      return messages.map(message => {
        if (id === message.id) {
          return {
            ...message,
            liked: !message.liked,
          }
        } else {
          return message;
        }
      });
    });
  };

  const updateLikeCount = ((liked) => {
    if (liked) {
      setLikeCount(() => likeCount + 1);
    } else{
      setLikeCount(() => likeCount - 1);
    }
  });

  return (
    <div id="App">
      <header>
        <h1>Barbara's Chatlog</h1>
      </header>
      <main>
        <h2>{likeCount} ❤️s</h2>
        <ChatLog 
        entries={messages} 
        onHandleLikeUpdate={handleLikeUpdate} 
        onUpdateLikeCount={updateLikeCount} 
        />
      </main>
    </div>
  );
};
export default App;