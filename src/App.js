import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import TimeStamp from './components/TimeStamp';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {chatMessages.map((message)=> (
        <ChatEntry 
          id={message.id}
          sender={message.sender}
          body={message.body}
          timestamp={TimeStamp}
          liked = {false}
          />
        ))}
      </main>
      </div>
  );
        };

export default App;
