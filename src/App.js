import React from 'react';
import './App.css';
import chatMessages from './data/messages.json'
// import ChatEntry from './components/ChatEntry'
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

  const increaseLikes = (chatEntry) => {
    let likeCount = 0
    for (let chat of chatEntry) {
      if (chat.liked === true) {
        likeCount ++
      }
    };
    return likeCount
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div className='like-count'>Total number of likes: {increaseLikes(chatEntry)} ❤️s</div>
        <ChatLog entries={chatEntry} updateChatData={updateChatData}/>
      </main>
    </div>
  );
};
export default App;
