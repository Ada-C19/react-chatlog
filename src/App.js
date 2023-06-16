import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  const firstChatMessage= chatMessages[0];
  console.log(firstChatMessage);
  
  return (
    <div id="App">
      <header>
        <h1>🤖 When Robots Collide 🤖 </h1>
      </header>
      <main>
        <ChatEntry
          sender={firstChatMessage.sender}
          body={firstChatMessage.body}
          timeStamp={firstChatMessage.timeStamp}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
