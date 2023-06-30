import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [messages, setMessages] = useState(chatMessages); 

  const handleLikeCount = (id) => {
    const copyMessages = [...messages];
    let newLiked;
    for (let i = 0; i < copyMessages.length; i++){
      if (copyMessages[i].id === id){
        const oneMessage = {...copyMessages[i]}
        oneMessage.liked = ! oneMessage.liked; 
        copyMessages[i] = oneMessage;
        newLiked = oneMessage.liked;
      }
    }

    
    setMessages(copyMessages); 
    setTotalLikes((prevLikes) => (newLiked ? prevLikes + 1 : prevLikes - 1));
  };

  

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon</h1>
        <p>{totalLikes} {totalLikes === 1 ? '❤️' : '❤️s'}</p>
      </header>
      <main>
        <ChatLog entries={messages} onLikeChange={handleLikeCount} />
      </main>
    </div>
  );
};

export default App;

