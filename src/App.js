// import { useState } from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

import ChatLog from './components/ChatLog';

const App = () => {

  // const [messageData, setMessageData] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry
            sender= 'Tweety'
            body= 'Tweet-Tweet-MF'
            timeStamp= 'MMMM Do YYYY, h:mm:ss a'
        /> */}
        <ChatLog
            entries={chatMessages}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
