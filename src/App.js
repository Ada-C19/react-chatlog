import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatList from './components/ChatLog.js'
import {useState} from 'react';

const App = () => {

  const [messages, setMessages] = useState(chatMessages)
  
  const changeLiked = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        const updatedMessage = {...message};
        updatedMessage.liked = !updatedMessage.liked;
        return updatedMessage;
      } else {
        return {...message};
      }
    })
    setMessages(newMessages);
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      <div className="App">
        <ChatList
        messages={messages} changeLiked={changeLiked}
        />
      </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
