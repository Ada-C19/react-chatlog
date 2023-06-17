import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js'

const App = () => {
  const local = chatMessages[0].sender
  let remote;
  if (chatMessages.length > 1) {
    for (const obj of chatMessages) {
      if (obj.sender !== local) {
        console.log(obj.sender)
        remote = obj.sender;
        break;
      }
    }
  }

  const [chatData, setChatData] = useState(chatMessages)

  const updateChatData = (updatedEntry) => {
    setChatData((prev) => {
      return prev.map((entry) => {
        if (entry.id === updatedEntry.id) {
          return updatedEntry;
        } else {
          return entry;
        };
      });
    });
  };

  const countLikes = (updatedEntry) => {
    const likeEntries = updatedEntry.filter(entry => entry.liked === true);
    return likeEntries.length
  }
  const numLikes = countLikes(chatData)

  return (
    <div id="App">
      <header>
        <h1>Chat with Vladimir</h1>
        <section className="widget" id="heartWidget"> {numLikes} ❤️s </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateEntry={updateChatData} local={local} remote={remote} />
      </main>
    </div>
  );
};

export default App;