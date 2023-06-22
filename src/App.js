import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = updatedMessage => {
    const messages = chatData.map(message => {
      if(message.id === updatedMessage.id){
        return updatedMessage;
      } else{
        return message;
      }
    })
    setChatData(messages);
  };

  const calcTotalLikes = (chatData) => {
    let initialLikes = 0;
    return chatData.reduce((total, message)=>{
      return message.liked ? total += 1 : total
      }, initialLikes);
  };

  const totalLikes = calcTotalLikes(chatData)
  
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog updateChatData={updateChatData} entries={chatMessages} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
