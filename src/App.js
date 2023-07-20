import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';



const App = () => {
  // const [likes, setLikes] = useState(0);
  // const addLikes = () => {
  //   setLikes(likes + 1);
  // }
  // const minusLikes = () => {
  //   setLikes(likes - 1);
  // }
  const [messages, setMessages] = useState(chatMessages);

  const updateLikes = (id) => {
    setMessages((prev) => {
      return prev.map((entry) => {
        if (id === entry.id) {
          console.log('test');
          return {
            ...entry,
            liked: !entry.liked,
            };
        } else {
          return entry;
        };
      });
    });
  };

  const totalLikesCount = messages.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }
    return total;
  },0);


  return (
    <div id="App">
      <header>
        <h1>Magic Messenger</h1>
        <h2>Chat between Estragon and Vladmir</h2>
        <div id='heartWidget' className='widget'>{totalLikesCount} ❤️s</div> 
      </header>
      <main>
      <ChatLog entries={chatMessages} updateLikes={updateLikes}/>
      
      </main>
    </div>
  );
};

export default App;
