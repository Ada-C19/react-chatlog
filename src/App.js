import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
// import TimeStamp from './components/TimeStamp';

// {

const chatData = chatMessages[0]

const App = () => {

  // const dateFormat = new Date()
  // const dataDateTime = chat.timeStamp

  // const sender = 
  // const body = 
  // const timeStamp
  return (
    <div id="App">
      <header>
        <h1>Messenger</h1>
      </header>
      <main >
        <ChatEntry entries={chatData} sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp} />
        {/* <div>
          <h3> {chat.sender} </h3>
          <p>{chat.body}</p>
          <p><time datetime={dateTime}></time></p> */}
        {/* <p> {chat} </p> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* </div> */}

      </main>
    </div>
  );
};

export default App;
