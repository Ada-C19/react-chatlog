import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {

  const testChat = chatMessages[0];

  console.log(chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          id={testChat.id}
          liked={testChat.liked}
          sender={testChat.sender}
          body={testChat.body}
          timeStamp={testChat.timeStamp}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
