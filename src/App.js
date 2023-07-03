import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const countLikes = (messages) => {
  let count = 0;
  for (const message of messages) {
    if (message.liked) {
      count += 1;
    }
  }
  return count;
};

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const onLikeClicked = (id) => {
    setMessages(prev => {
      return prev.map(currentMessage => {
        if (id === currentMessage.id) {
          return {...currentMessage, liked: !currentMessage.liked}        
        } else {
          return currentMessage;
        }
      })
    });
  }

  const likes = countLikes(messages);
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{likes} ❤️s</h2>
      </header>
      <main>
          <ChatLog entries={messages} onLikeClicked={onLikeClicked}/>
      </main>
    </div>
  );
  };
export default App;