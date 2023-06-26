import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatData = chatMessages
    // console.log(chatData)
    // {
    //   'sender':'Vladimir',
    //   'body':'why are you arguing with me',
    //   'timeStamp':'2018-05-29T22:49:06+00:00',
    // }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}></ChatEntry> */}
        <ChatLog entries={chatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
