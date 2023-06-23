import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import {useState} from 'react';
import ColorChoice from './components/ColorChoice.js';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likedCount, setLikedCount] = useState(0);
  const [colorLocal, setColorLocal] = useState('green');
  const [colorRemote, setColorRemote] = useState('blue');

  const calculateLikedCount = (id) => {
    console.log('calculateLikedCount')
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          liked: !message.liked
        };
      }
      return message;
    });
  
    setMessages(newMessages);
  
    let count = 0;

    newMessages.forEach((message) => {
      if (message.liked) {
        count++;
      }
    });
    setLikedCount(count);
  };



  // const entries = chatMessages;
  return (
    <div id="App">
      <header>
        <h1>Chat between <span className={colorLocal}>Vladimir</span> and <span className={colorRemote}>Estragon</span></h1>
        <div>
          <ColorChoice setColorCallback={setColorLocal} title={"Vladimir's color:"} color={colorLocal}/>
          <p>{likedCount} {likedCount === 1 ? '❤️' : '❤️s'}</p>
          <ColorChoice setColorCallback={setColorRemote} title={"Estragon's color:"} color={colorRemote}  />
        </div>
        
      </header>
      <main>
      <ChatLog entries ={messages} calculateLikedCount = {calculateLikedCount} colorLocal={colorLocal} colorRemote={colorRemote}
        />
      </main>
    </div>
  );
};

export default App;
