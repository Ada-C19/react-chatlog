import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [ chatData, setChatData ] = useState(chatMessages);

  const updateChatData = updatedChat => {
    const updatedChats = chatData.map((chat) => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatData(updatedChats);
  };

  const likedTally = chatData.reduce((tally, chat) => {
    if (chat.liked) {
      tally += 1;
    }

    return tally;
  }, 0)

  const localName = chatData[0].sender
  
  return (
    <div id="App">
      <header>
        <h1>Messages</h1>
        <h4>{likedTally} ❤️s</h4>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateChatData={updateChatData}
          localName={localName}
        />
      </main>
    </div>
  );
};

export default App;
