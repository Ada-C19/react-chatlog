import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  // console.log((chatMessages))
  const testMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Chat 123</h1>
      </header>
      <main>
        <ChatEntry 
        sender= {testMessage.sender} 
        body= {testMessage.body}
        timeStamp= {testMessage.timeStamp}>
        </ChatEntry>
        <ChatEntry></ChatEntry>
      </main>
    </div>
  );
};

export default App;
