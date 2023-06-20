import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry 
            sender={chatMessages[0].sender}
            body={chatMessages[0].body}
            timeStamp={chatMessages[0].timeStamp}
          />
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
