import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        <ChatEntry timeStamp = "2018-05-29T22:49:06+00:00" body = "why are you arguing with me" 
        sender = "Vladimir" />
      {/* Wave 02: Render ChatLog component */} 
      </main>
    </div>
  );
};

export default App;
