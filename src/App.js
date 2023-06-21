import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
// import numOfHearts from ChatEntry;

const App = () => {
  // const chatEntries = chatMessages.map(message => {
  //   return <ChatEntry 
  //   key={message.id}
  //   id={message.id}
  //   sender={message.sender}
  //   body={message.body}
  //   timeStamp={message.timeStamp}
  //   liked={message.liked} />
  // })
  return (
    <div id="App">
      <header>
        <h1>AI Take Over</h1>
        {/* <p className = "number of likes">{numOfHearts}</p> */}
      </header>
      <main>
        <div className="contacts">
          {ChatLog}
        </div>
      </main>
    </div>
  );
};

export default App;
