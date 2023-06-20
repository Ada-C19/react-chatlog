import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Nadia's ChatLog</h1>
      </header>
      <main>
        {/* <ChatEntry props={chatMessages[0]}/> */}
        <ChatLog entries={messages}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
