import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const updateHeart = (messageToUpdate) => {
    const updateMessages = messages.map(message => {
      if (message.id === messageToUpdate.id) {
          return {...message, liked: !message.liked}
      }; 
    return message
  });
  setMessages(updateMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>ChatLog.com</h1>
        <h1></h1>
      </header>
      <main>
        <ChatLog entries={messages} updateHeart={updateHeart}/>
      </main>
    </div>
  );
};

export default App;

