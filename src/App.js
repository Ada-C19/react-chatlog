import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'; //note this has to have 'components' because App.js and ChatLog.js are not in the same folder
import { useState } from 'react';

const App = () => {
  const [likesCount,setLikesCount] = useState(0);

  const [messages,setMessage] = useState(chatMessages);



  const toggleLiked = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      } 
      return message;
    });

    setMessage(newMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{likesCount}❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog messages={messages} toggleLiked={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
