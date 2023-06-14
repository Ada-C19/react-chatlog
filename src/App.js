import React from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';





const App = () => {

  const chatMessages = {
    'id': 4,
    'sender': 'Estragon',
    'body': 'A robot.',
    'timeStamp':'2018-05-29T22:52:21+00:00',
    'liked': false
  }
  console.log(`chatMessages: ${chatMessages}`)

  return (
    <div id="App">
      <header>
        <h1>Chat with Me!</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={chatMessages.sender}
          body={chatMessages.body}
          timeStamp={chatMessages.timeStamp} />
      </main>
    </div>
  );
};

export default App;
