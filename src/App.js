import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  const oneChat = {
    id: 1,
    sender:'Vladimir',
    body:'why are you arguing with me',
    timeStamp:'2018-05-29T22:49:06+00:00',
    liked: false,
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
