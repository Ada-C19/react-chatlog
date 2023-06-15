import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [chatMessagesData, setChatMessages] = useState(chatMessages);
  const [count, setCount] = useState(0);

  const countLikes = (messages) => {
    for (let message of messages) {
      if (message.liked === true) {
        setCount(count + 1);
      }
    }
  };

  const updateMessages = updatedMessage => {
    const messages = chatMessagesData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatMessages(messages);
    countLikes(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log Between Vladimir and Estragon</h1>
        <h2>{count} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessagesData} onUpdateMessage={updateMessages}/>
      </main>
    </div>
  );
};

export default App;
