import React from 'react';
import './App.css';

// Import sample message data 
import chatMessages from './data/messages.json'; 

// Import ChatEntry component
import ChatEntry from './components/ChatEntry';

import ChatLog from './components/ChatLog'; 

function App() {

  return (
    <div>
     {/* Render ChatLog */}
     <ChatLog entries={chatMessages} />
    </div>
  )
}

export default App;