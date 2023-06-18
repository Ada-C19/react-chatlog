import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'; 
import { useState } from 'react';

const App = () => {
  const [likesCount,setLikesCount] = useState(0);

  const [messages,setMessage] = useState(chatMessages);



  const toggleLiked = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        if (!message.liked) {
          message.liked = true;
          setLikesCount(likesCount+1);
        } else {
          message.liked = false;
          setLikesCount(likesCount-1);
        }
      } 
      return message;
    });

    setMessage(newMessages);

    console.log(newMessages)
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{likesCount} ❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} toggleLiked={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
