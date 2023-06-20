import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages);

  const [likeCount, setLikeCount] = useState(0);

  const updateChatEntry = (updatedMessage) => {
    const messages = chatData.map((message) => {
      if (message.id === updatedMessage.id) {
        if (updatedMessage.liked) {
          setLikeCount(likeCount +1)
        } else {
          setLikeCount(likeCount - 1)
        }

        return updatedMessage;
      }
      return message;
    })
    setChatData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section class="likeCount">
          {likeCount} ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onToggleLike={updateChatEntry}/>
      </main>
    </div>
  );
};

export default App;
