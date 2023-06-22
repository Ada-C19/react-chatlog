import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog'


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {chatMessages.map((message) => (
          <ChatEntry
          key={message.id}
          id = {message.id}
          sender = {message.sender}
          body = {message.body}
          timeStamp = {message.timeStamp}
          liked = {message.liked}
        />
        ))
        }
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;


