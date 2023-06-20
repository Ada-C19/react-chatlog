import React from 'react';
import './App.css';
import chatMessages from './data/messages.json'
import ChatEntry from './components/ChatEntry'
import ChatLog from './components/ChatLog'
import {useState} from 'react';

const App = () => {
  const [chatEntry, setChatEntry] = useState(chatMessages)

  const updateChatData = updatedChat => {
    const newChats = chatEntry.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatEntry(newChats);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatEntry} updateChatData={updateChatData}/>
      </main>
    </div>
  );
};
export default App;
