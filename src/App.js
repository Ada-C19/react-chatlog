import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messages, setMessages] = useState(() => {
    const participants = Array.from(new Set(chatMessages.map((message) => message.sender)));
    const updatedMessages = chatMessages.map((message) => ({
      ...message,
      type: participants.indexOf(message.sender) === 0 ? 'local' : 'remote',
    }));
    return updatedMessages;
  });

  const [color, setColor] = useState('#000000'); 

  const toggleLike = (id) => {
    setMessages((prevMessages) => {
      return prevMessages.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        }
        return message;
      });
    });
  };

  const setParticipantColor = (color) => {
    setColor(color);
  };

  const participants = Array.from(new Set(chatMessages.map((message) => message.sender)));

  const headerTitle = participants.length === 1 ? participants[0] : `${participants[0]} and ${participants[1]}`;

  return (
    <div id="App">
      <header>
        <h1>Say What</h1>
        <h3>{headerTitle}</h3>
        <ColorChoice setColorCallback={setParticipantColor} />
      </header>
      <main>
        <ChatLog entries={messages} onLike={toggleLike} color={color} />
      </main>
    </div>
  );
};

export default App;
