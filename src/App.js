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
        <ChatEntry sender="Maz" body="Help, I took too many mushrooms and I'm having a bad trip :'(" timeStamp="2018-05-29T22:49:06+00:00"></ChatEntry>
        <ChatEntry sender="Winslow" body="Sorry, I thought I replied" timeStamp="2022-05-29T22:49:06+00:00"></ChatEntry>
      </main>
    </div>
  );
};

export default App;
