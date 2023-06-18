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
    const updatedChats = chatData.map((entry) => {
      if (entry.id === chatToUpdate.id) {
        return chatToUpdate
      } else {
        return entry
      }
    })
    setChatData(updatedChats)
  }

  const countHearts = () => {
    let hearts = 0;
    for (let chat of chatData) {
      if (chat.liked) {
        // console.log(`INSIDE FOR ${chat.liked}`)
        hearts += 1
      }
    }
    // console.log(`HEARTS: ${hearts}`)
    return hearts
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <div>
        <h1>{countHearts()} ❤️s</h1>
        </div>
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
