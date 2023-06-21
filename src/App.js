import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'
import messages from './data/messages.json'

const App = () => {
  const chatEntries = messages.map(message => {
    return <ChatEntry 
    sender={message.sender} 
    body={message.body} 
    timeStamp={message.timeStamp} 
    />
  });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {chatEntries}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
