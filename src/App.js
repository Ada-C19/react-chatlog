import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [chatMessageData, setChatMessages] = useState(chatMessages);

  const updateChatMessages = updatedMessage => {
    const chats = chatMessageData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatMessages(chats);
    console.log(updatedMessage);
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessageData} onUpdateChat={updateChatMessages}> </ChatLog>
      </main>
    </div>
  );
};

export default App;
