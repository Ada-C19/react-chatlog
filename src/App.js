import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {

  const exampleMessage = chatMessages[0]

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {
        /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
          <ChatEntry body={exampleMessage.body} timeStamp={exampleMessage.timeStamp} sender={exampleMessage.sender}/>
        }
      </main>
    </div>
  );
};

export default App;
