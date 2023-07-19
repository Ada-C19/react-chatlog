import React from 'react';
import './App.css';

// Import sample message data 
import chatMessages from './data/messages.json'; 

// Import ChatEntry component
import ChatEntry from './components/ChatEntry';

function App() {

  // Get first message object from sample data
  const [firstMessage] = chatMessages;

  return (
    <div id="App">
    
      {/* Header */}
      <header>
        <h1>Chat Log</h1>
      </header>

      <main>
      
        {/* Render single ChatEntry component */}
        <ChatEntry
          sender={firstMessage.sender} 
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />

      </main>
    
    </div>
  );
}

export default App;