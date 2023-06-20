import { useState } from "react";
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {

  const[messages, setMessages] = useState(chatMessages);
  let likeNum = messages.filter(message => message.liked).length;
    
  const updateLike = (messageId) => {

    // create a new list of animals with updated bookmark value
    const updatedMessages = messages.map(message => {
      // let likeNum = 0
      if (message.id === messageId) {
        message.liked = !message.liked;
        return {...message}
      };

      return {...message}
    });

    setMessages(updatedMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Funky Convo</h1>
        <p>{likeNum} ❤️s</p>
      </header>
      <main>
        <ChatLog 
          entries={chatMessages}
          updateLike={updateLike}/>
      </main>
    </div>
  );
};

export default App;