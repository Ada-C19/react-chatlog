import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';

const oneData = {
  id: 1,
  sender:'Vladimir',
  body:'why are you arguing with me',
  timeStamp:'2018-05-29T22:49:06+00:00',
  liked: false
}

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
        <ChatEntry></ChatEntry>
      </main>
    </div>
  );
};

export default App;
