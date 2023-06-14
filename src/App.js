import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = updatedChat => {
    const chats = chatData.map(chat => {
        if (chat.id === updatedChat.id) {
            return updatedChat;
        } else {
            return chat;
        }
    });

    setChatData(chats);
};

  const countLikes = (arr) => {
    let count = 0;
    arr.forEach(element => {
      if (element.liked === true) {
        count += 1;
      }
    });
    return count;
  }

  const likes = countLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <h2>{likes} ❤️'s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
