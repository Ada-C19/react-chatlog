import React from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry
            sender={chatMessages[0].sender}
            body={chatMessages[0].body}
            timeStamp={chatMessages[0].timeStamp}
            liked={chatMessages[0].liked}
          /> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog
          entries={entries}
        />
      </main>
    </div>
  );
};

export default App;
