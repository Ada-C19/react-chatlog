import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [messages, setMessages] = useState(chatMessages);

  const updateLiked = (messageId) => {
    const updatedMessages = messages.map(message => {
      if (messageId === message.id) {
        message.liked = !message.liked;
      }
      return {...message}
    });
    setMessages(updatedMessages);
  };

  const likeCount = () => {
    let likeCount = 0;
    for (const message of messages) {
      if (message.liked) {
        likeCount++;
      }
    }
    return likeCount;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <section> 
          <span id="heartWidget" className="widget"> { likeCount() } ❤️'s liked</span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
