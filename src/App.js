import React, { useState } from 'react';
import './App.css';
import messagesData from './data/messages.json';
// import ChatEntry from './components/ChatEntry'
import ChatLog from './components/ChatLog';
import LikeCounter from './components/LikeCounter';

const App = () => {
  // console.log(chatMessages);
  const [chatMessages, setChatMessages] = useState(messagesData);

  const handleLikeClick = (index) => {
    const updatedMessages = [...chatMessages];
    const message = { ...updatedMessages[index] };
    message.liked = !message.liked;
    updatedMessages[index] = message;
    setChatMessages(updatedMessages);
    
  };
  // console.log(chatMessages)
  const likesCount = chatMessages.reduce((count, message) => {
    return message.liked ? count + 1: count;
  }, 0);

  // console.log(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Chat Center</h1>
        <LikeCounter count={likesCount} />
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} handleLikeClick={handleLikeClick} />
      </main>
    </div>
  );
};

export default App;
