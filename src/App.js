import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import HeartCounter from './components/HeartCounter'
import messagesJSON from './data/messages.json'

const App = () => {
  const [messageData, setMessageData] = useState(messagesJSON);

  const toggleLiked = (id) => {
    console.log('im toggling likes ova heare');
    const messages = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      };

      return message;
    });

    setMessageData(messages);
  }

  return (
    
    <div id="App">
      <header>
        <h1>Chat with Vladimir</h1>
        <HeartCounter />
      </header>
      <main>
        <ChatLog entries={messagesJSON} onLikeMessage={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
