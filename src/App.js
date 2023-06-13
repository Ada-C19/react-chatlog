import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {

  // const testMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      {/* loops through the chatMessages to render each to chatentry */}
        {chatMessages.map((data) => (
        <ChatEntry
          key={data.id}
          sender={data.sender}
          body={data.body}
          timeStamp={data.timeStamp}
          />
        ))}


        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
