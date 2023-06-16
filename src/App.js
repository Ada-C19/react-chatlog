import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  //define function to update message by ID
  const [chatBody, setChatBody] = useState(chatMessages);
  const updateMessage = (newMessage) => {
    const updatedMessages = chatBody.map((message) => {
      if (message.id == newMessage.id) {
        return newMessage;
      } else {
        return message;
      }
    });
    setChatBody(updatedMessages);
  };

  const likedMessageCount = chatBody.filter((message) => message.liked).length;
  const plural = likedMessageCount == 0 || likedMessageCount > 1 ? 's' : '';

  return (
    <div id='App'>
      <header>
        <h1>🤖 Updating for Godot 🤖</h1>
        <p id='heartWidget' className='widget'>
          {`${
            chatBody.filter((message) => message.liked).length
          } message${plural} liked`}
        </p>
      </header>
      <main>
        <ChatLog
          className='chat-log'
          entries={chatBody}
          onLikeMessage={updateMessage}
        />
      </main>
    </div>
  );
};

export default App;
