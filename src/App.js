import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  const oneChat = chatMessages[0];
  console.log(oneChat)

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatEntry name={oneChat.sender} body={oneChat.body} time={oneChat.timeStamp}></ChatEntry>
        {/*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
