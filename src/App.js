import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const firstChatMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      <ChatEntry
        sender={firstChatMessage.sender}
        body={firstChatMessage.body}
        timeStamp={firstChatMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
