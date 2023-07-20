import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Magic Messenger</h1>
        <h2>Chat between you and Vladmir</h2>
        <div id='heartWidget' className='widget'>{likes} ❤️s</div>
      </header>
      <main>
      <ChatLog entries={chatMessages} addLikes={addLikes} takeLikes={takeLikes}/>
      </main>
    </div>
  );
};

export default App;
