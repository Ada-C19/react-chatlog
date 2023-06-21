import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Waiting for Chat Godot</h1>
      </header>
      <main>
        <ChatEntry chatData ={chatMessages[0]}/>
      </main>
    </div>
  );
};

export default App;
