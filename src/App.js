import { useState } from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';

import ChatLog from './components/ChatLog';

const App = () => {


  let initialLikes = 0;
    console.log('intial likes...')
    chatMessages.forEach(message => {
    if(message.liked){
      initialLikes++;
    }
  });

  const [totalLikes, setTotalLikes] = useState(initialLikes);
  

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div className='likes'>{totalLikes} ❤️s</div>
      </header>
      <main>
        
        <ChatLog
            entries={chatMessages} setTotalLikes={setTotalLikes}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
