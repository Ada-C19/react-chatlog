import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'

const App = () => {
  console.log(chatMessages);
  const {sender, body, timeStamp} = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {<ChatEntry
          sender={sender}
          body={body}
          timeStamp={timeStamp}
          />

          /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
