import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import TimeStamp from './components/TimeStamp';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const handleLike = (id) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          liked: !message.liked,
        };
      }
      return message;
    });
  
    setMessages(updatedMessages);
  };
  // const countLikes = () => {

  // } can use ***reduce***/filter/for loop
  const likedMessagesCount = messages.reduce(
    (count, message) => (message.liked ? count + 1 : count),
    0
  );

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <div className="liked-messages-count">{likedMessagesCount} {'❤️'}s</div>
      </header>
      <main>
          <ChatLog entries={messages} handleLike={handleLike}/>
      </main>

      </div>
      )
        };

export default App;
