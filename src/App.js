import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'; 

const App = () => {

  const [firstMessage] = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1> 
      </header>

      <main>
        <ChatEntry  
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp} 
        />
      </main>

    </div>
  );
};

export default App;
