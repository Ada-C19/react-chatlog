import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';


const App = () => {
  const oneChat = {
    sender:'Vladimir',
    body:'why are you arguing with me',
    time:'2018-05-29T22:49:06+00:00',
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry 
        sender={oneChat.sender} 
        body={oneChat.body}
        time={oneChat.time} />
      </main>
    </div>
  );
};

export default App;
