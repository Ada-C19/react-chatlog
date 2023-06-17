import React, { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const onToggleLike = (id) => {
    setChatData((prevData) => {
      return prevData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked }
        } else {
          return chat
        }
      })
    });
  };

  const getNames = () => {
    const names = [];
    for (const message of chatMessages) {
      if (!names.includes(message.sender)) {
        names.push(message.sender)
      }
    };
    return names;
  };

  const [name1, name2] = getNames();

  return (
    <div id="App">
      <header>
        <h1>Chat between {name1} and {name2}</h1>
      </header>
      <main>
        <ChatLog entries={chatData} onToggleLike={onToggleLike} names={[name1, name2]} />
      </main>
    </div>
  );
};

export default App;
