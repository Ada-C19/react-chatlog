import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { getByLabelText } from '@testing-library/react';

const App = () => {
  const [messages, setMessages] = React.useState(chatMessages);

  const likeMessage = (id) => {
    setMessages(
      messages.map((message) => (message.id === id ? {
        ...message,
        liked: !message.liked
      } : message))
    );
  };

  let totalHearts = 0;

  for (let message of messages) {
    if (message.liked) {
      totalHearts++
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Estragon</h1>
        <p>Total Likes: {totalHearts} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messages} likeMessage={likeMessage} />
      </main>
    </div>
  );
};

export default App;
