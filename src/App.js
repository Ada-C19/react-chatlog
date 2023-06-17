import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [messages, setMessages] = useState(chatMessages);

  const updateLiked = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (messageId === message.id) {
        message.liked = !message.liked;
      }
    });
    setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
