import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const updateHeart = (messageToUpdate) => {
    const updateMessages = messages.map(message => {
      if (message.id === messageToUpdate.id) {
        messageToUpdate.liked ? setLikes(likes - 1) : setLikes(likes + 1)
        return {...message, liked: !message.liked}
      }; 
    return message
  });
  setMessages(updateMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>
          {likes}
          ❤️s
        </h2>
      </header>
      <main>
        <ChatLog entries={messages} updateHeart={updateHeart}/>
      </main>
    </div>
  );
};

export default App;

