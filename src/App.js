import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main> 
        {/* <ChatEntry
        sender = {chatMessages.sender}
        body = {chatMessages.body}
        timeStamp = {chatMessages.timeStamp}
        /> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
