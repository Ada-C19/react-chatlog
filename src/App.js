import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import LikesCounter from './components/LikesCounter';


const App = () => {

  const [messagesData, setMessagesData] = useState(chatMessages)

  const updateMessageData = (updatedMessage) => {
    const messages = messagesData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessagesData(messages);
    
  };
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <LikesCounter entries={messagesData}></LikesCounter>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onUpdateMessage={updateMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;


