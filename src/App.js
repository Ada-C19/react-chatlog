import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'

const App = () => {
  const [chatMessages, setChatMessages] = useState(chatMessages)
  const likeMessage = (id) => {
    setChatMessages((prev) => {
        return prev.map((message) => {
          if (id === message.id) {
            return {
              ...message,
              liked: !message.liked,
            };
          } else {
            return message;
          }
        })
    });
  };

  return (
    
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} onLikeMessage={likeMessage} />
      </main>
    </div>
  );
};

export default App;
