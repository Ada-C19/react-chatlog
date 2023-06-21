import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatEntries = chatMessages.map(message => {
    return <ChatEntry 
    key={message.id}
    id={message.id}
    sender={message.sender}
    body={message.body}
    timeStamp={message.timeStamp}
    liked={message.liked} />
  })
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div className="contacts">
          {chatEntries}
        </div>
      </main>
    </div>
  );
};

export default App;
