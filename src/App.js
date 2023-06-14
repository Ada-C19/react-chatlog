import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      { chatMessages.map((message, index) => (
        <ChatEntry
        key={index}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp} 
        />)

        )};

      </main>
    </div>
  );
};

export default App;
