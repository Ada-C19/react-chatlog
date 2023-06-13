import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';


const App = () => {
  const props = {
    "id": 1,
    "sender":"Vladimir",
    "body":"why are you arguing with me",
    "timeStamp":"2018-05-29T22:49:06+00:00",
    "liked": false
  }
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry props={props} /> 
      </main>
    </div>
  );
};

export default App;
