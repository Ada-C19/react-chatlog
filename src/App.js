import { useState } from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'


const App = () => {
  // updating state for each chat Entry 
  const [chatEntryData, setLikeStatus] = useState(chatMessages);
  const updateChatData = (updatedChat) => {
    const chats = chatEntryData.map((chat) => {
      if (chat.id === updatedChat.id){
        return updatedChat; 
      } else {
        return chat;
      }
    });
    setLikeStatus(chats);
  };

  let totalBoos = 0;
  for (let entry of chatEntryData){
    if (entry.liked === true){
      totalBoos++;
    };
  };
  return (
    <div id="App">
      <header>
        <h1> Vladmir vs. Estragon</h1>
        <section>
          <h2 id="heartWidget" className="widget">{totalBoos}👎s</h2>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={chatEntryData} 
          onChatState={updateChatData} 
        />
      </main>
    </div>
  );
}

export default App;
