import React, { useState } from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';



const App = () => {
  const [messages, setMessages] = useState(entries)

  const numLikes = messages.filter((message) => message.liked).length;

  // going to write a helper function for messages
  const setLikes = (id) => {
    const newMessages = messages.map((message) => {
      if (id === message.id){
        return {...message, liked: !message.liked};
        
      }
      
      return message 
    });

    setMessages(newMessages)

  }
 
  return (
    <div id="App">
      <header>
        <h1>chit chat</h1>
        <p>number of likes {numLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messages} setLikes={setLikes}  />
      </main>
    </div>
  );
};

export default App;
