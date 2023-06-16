import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';

const App = () => {
  const testMessage = chatMessages[0];
  return (
    <div id='App'>
      <header>
        <h1>Updating for Godot</h1>
      </header>
      <main>
        <ChatEntry
          sender={testMessage.sender}
          body={testMessage.body}
          timeStamp={testMessage.timeStamp}
          liked={testMessage.liked}
        />
      </main>
    </div>
  );
};

export default App;
