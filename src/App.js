import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatMessage1 = chatMessages[0]
  console.log('Hello World')
  console.log(chatMessage1)

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry timeStamp={chatMessage1.timeStamp}> {chatMessage1} </ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
