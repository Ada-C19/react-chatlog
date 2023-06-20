import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {

//state variables to use for total red hearts count and to pass to Chatlong and ChatEntry
  const [redFilledHeartCount, setRedFilledHeartCount] = useState(0);


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{redFilledHeartCount} ❤️s</p>
      </header>
      <main>
        
        {/* to render chatlog component */}
        <ChatLog entries={chatMessages}
          redFilledHeartCount={redFilledHeartCount}
          setRedFilledHeartCount={setRedFilledHeartCount}
        />
      </main>
    </div>
  );
};

export default App;
