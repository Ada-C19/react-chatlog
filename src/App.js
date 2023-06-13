import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const oneChat = chatMessages[0];
  // console.log(oneChat)

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
      </header>
      <main>
        {/*<ChatEntry name={oneChat.sender} body={oneChat.body} time={oneChat.timeStamp}></ChatEntry>*/}
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
