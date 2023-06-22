import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import {useState} from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likedCount, setLikedCount] = useState(0);

  const calculateLikedCount = (id) => {
    console.log('calculateLikedCount')
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          liked: !message.liked
        };
      }
      return message;
    });
  
    setMessages(newMessages);
  
    let count = 0;

    newMessages.forEach((message) => {
      if (message.liked) {
        count++;
      }
    });
    setLikedCount(count);
  };



  // const entries = chatMessages;
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{likedCount} {likedCount === 1 ? '❤️' : '❤️s'}</p>
      </header>
      <main>
      <ChatLog entries ={messages} calculateLikedCount = {calculateLikedCount}
        />
      </main>
    </div>
  );
};

export default App;
