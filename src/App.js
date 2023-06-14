import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const testData = {
        id:7,
        sender:'Joe Biden',
        body:"Get out by 8am.  I'll count the silverware",
        timeStamp:'2018-05-18T22:12:03Z',
        liked:false
  }    
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estagon</h1>
      </header>
      <main>
        <ChatEntry sender={testData.sender} body={testData.body} timeStamp={testData.timeStamp}></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
