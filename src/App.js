import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
// import TimeStamp from './components/TimeStamp';

// {

const chatData = chatMessages[0]
const chatLogData = chatMessages

const App = () => {
  const onChangeLike = () => {

  }

  return (
    <div id="App">
      <header>
        <h1>Messenger</h1>
      </header>
      <main >
        <ChatLog entries={chatLogData} />
        <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp} />


      </main>
    </div>
  );
};

export default App;
