import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import HeartCounter from './components/HeartCounter'
import messagesJSON from './data/messages.json'

const App = () => {
  const [messageData, setMessageData] = useState(messagesJSON);

  const toggleLiked = (id) => {
    const messages = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message;
    });

    setMessageData(messages);
  }

  const totalLikes = messagesJSON.filter(message => message.liked).length;

  return (
    
    <div id="App">
      <header>
        <h1>Chat with Vladimir</h1>
        <br></br>
        <HeartCounter likeTotal={totalLikes} />
      </header>
      <main>
        <ChatLog entries={messagesJSON} onLikeMessage={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
