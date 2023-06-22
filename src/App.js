import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const chatLogData = chatMessages;

const App = () => {
  const [updatedChatLogData, setChangeLikeState] = useState(chatLogData)

  const onChangeLike = (id) => {
    setChangeLikeState(() => updatedChatLogData.map(chat => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
      }
      else {
        return chat;
      }
    }
    ))
  }

  const calcTotalLike = (updatedChatLogData) => {
    const initialValue = 0
    return updatedChatLogData.reduce((total, chat) => {
      if (chat.liked === true) {
        return total + 1;
      } else {
        return total;
      }
    }, initialValue);

  }

  return (
    <div id="App">
      <header>
        <h1>{calcTotalLike(updatedChatLogData)} ❤️s</h1>
      </header>
      <main >
        <ChatLog entries={updatedChatLogData} onChangeLike={onChangeLike} />
      </main>
    </div>
  );
};

export default App;
