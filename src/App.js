import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log('Hello World')
  console.log(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog chatMessages={ chatMessages }></ChatLog>
        
        {/* <ChatEntry sender={chatMessage1.sender} body={chatMessage1.body} timeStamp={chatMessage1.timeStamp}></ChatEntry>
        <ChatEntry sender={chatMessage2.sender} body={chatMessage2.body} timeStamp={chatMessage2.timeStamp}></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
