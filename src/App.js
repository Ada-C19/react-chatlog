import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [counter, setCounter] = useState(0);

  

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{counter} ❤️s</h2>
      </header>
      <main>  
        <ChatLog entries={chatMessages} counter={counter} setCounter={setCounter}/>
      </main>
    </div>
  );
};

export default App;
