import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>  
        <ChatLog/>
      </main>
    </div>
  );
};

export default App;
