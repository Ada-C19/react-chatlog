import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

// import ChatEntry from './components/ChatEntry';
// import TimeStamp from './components/TimeStamp';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>

        {/*         <ChatEntry 
        sender={chatMessages[0]['sender']} 
        body={chatMessages[0]['body']} 
        timeStamp={chatMessages[0]['timeStamp']} 
        /> */}
        
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};
export default App;