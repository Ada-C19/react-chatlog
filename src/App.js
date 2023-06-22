import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const handleLikeClick = (id) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((entry) => {
        if (entry.id === id) {
          return {...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      });
      return updatedMessages;
    });
  };

  const totalLikes = messages.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Vladmir & Estragon's Chat</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messages} handleLikeClick={handleLikeClick} />
      </main>
    </div>
  );
};

export default App;