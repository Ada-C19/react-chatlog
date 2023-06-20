import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [ chatData, setChatData ] = useState(chatMessages);

  console.log(chatMessages)
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog
          entries={chatData}
        />
      </main>
    </div>
  );
};

export default App;
