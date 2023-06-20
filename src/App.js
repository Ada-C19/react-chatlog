import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatList from './components/ChatLog.js'
import {useState} from 'react';

const calculateLikeNumber = (chatMessages) => {
  let likeNumber = 0
  for (let i = 0; i < chatMessages.length; i++) {
    if (chatMessages[i].liked) {
      likeNumber += 1
    }
  }
  return likeNumber
}

const App = () => {

  const [messages, setMessages] = useState(chatMessages)

  const likeNumber = calculateLikeNumber(messages)
  
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
      <div>
      <h1>{likeNumber} ❤️s</h1>
      </div>
      <div className="App">
        <ChatList
        entries={messages} changeLiked={changeLiked}
        />
      </div>
      </main>
    </div>
  );
};

export default App;
