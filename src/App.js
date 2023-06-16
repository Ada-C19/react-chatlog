import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  // Lift state in root function
  const [chatData, setChatData] = useState(chatMessages);

  // Update chatData LIKED key-value
  const onUpdateChat = (chatToUpdate) => {
    console.log(`Desde el App ${chatToUpdate.liked} and id: ${chatToUpdate.id}`)
    const chats = chatData.map((entry) => {
      if (entry.id === chatToUpdate.id) {
        return chatToUpdate
      } else {
        return entry
      }
    })
    setChatData(chats)
  }


  return (
    <div id="App">
      <header>
        <h1>Chat with Me!</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
           // Don't forget that var data that gets passed is the one from useState
          entries={chatData} 
          onUpdateChat={onUpdateChat}
        />
      </main>
    </div>
  );
};

export default App;
