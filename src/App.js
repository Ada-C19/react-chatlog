import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleLike = (id) => {
    setMessages(
      messages.map((message) => 
        message.id === id ? { ...message, liked: !message.liked } : message
      )
    );
  };

  // const countLikes = () => {
    
  // };

  return (
    <div id="App">
      <header>
        <h1>Waiting for Chat GDT</h1>
        <section> 
          <h2>1 ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog entries ={messages} toggleLike={toggleLike}/>
      </main>
    </div>
  );
};

export default App;
