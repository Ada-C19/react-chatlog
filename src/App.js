import React, { useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)
  const [numLikes, setNumLikes] = useState(0)
  
  const updateChatData = updatedChatData => {
    const chats = chatData.map(chat => {
      if (chat.id === updatedChatData.id) {
        return updatedChatData;
      } else {
        return chat;
      }
    });
    setChatData(chats);
  };

  useEffect(() => {
    for (const chat of chatData) {
      if (chat.liked) {
        setNumLikes(numLikes + 1)
      }
    }
  }, [chatData]);

  return (
    <div id="App">
      <header>
        <h1>Ada's Chat Log</h1>
        <section>{numLikes}</section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChatData={updateChatData}/>
      </main>
    </div>
  );
};

export default App;
