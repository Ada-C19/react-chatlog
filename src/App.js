import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {

  const [chatEntries, setChatsLike] = useState(chatMessages)

  const updateLikeData = updatedChat =>{
    const chats = chatEntries.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      }else {
        return chat;
      }
    }); 

    setChatsLike(chats)
    
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog 
                entries = {chatEntries}
                onUpdateChat = {updateLikeData}
        ></ChatLog>

      </main>
    </div>
  );
};

export default App;
