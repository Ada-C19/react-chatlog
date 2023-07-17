import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages)
  
  const handleLike = id => {
    setMessages(prevMessages => {
      return prevMessages.map(message => {
        if (id === message.id) {
          return {
            ...message,
            liked: !message.liked
          };
        }
        return message;
      })
    })
  }

  const totalLikes = messages.filter(entry => entry.liked).length 

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h3>{totalLikes} ❤️s</h3>
      </header>
      <main>
        {
          <ChatLog entries={messages} handleLike={handleLike}/> 
        }
      </main>
    </div>
  );
};

export default App;
