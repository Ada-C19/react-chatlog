import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';


const App = () => {
  console.log(chatMessages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      <ChatEntry></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
