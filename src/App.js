import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  let countLikes = 0

  const [messagesData, setMessagesData] = useState(chatMessages)

  const updateMessageData = (updatedMessage) => {
    const messages = messagesData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessagesData(messages);
    
  };
  const countMessageLikes = (count) => {
    console.log('count likes')
    console.log(countLikes);
    for (const message of messagesData) {
      if (message['liked'] === 'true') {
        count = count + 1;
        console.log(count)
        return count
      }
    }
  };
  return (
    <div id="App">
      <header>
        <h1>{() => { countMessageLikes(countLikes) }} {countLikes} likes</h1>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onUpdateMessage={updateMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

  // const updateMessageData = (updatedMessage) => {
  //   const messages = messagesData.map((message) => {
  //     if (message.liked !== updatedMessage.liked) {
  //       return updatedMessage.liked
  //     } else {
  //       return message
  //     };
  //   });
  //   setMessagesData(messages);
  // };

  
  

  

export default App;


 // const updateMessageData = (updatedMessage, countLikes) => {
  //   const messages = messagesData.map((message) => {
  //     if (message.liked !== updatedMessage.liked) {
  //       countLikes +=1 
  //       return updatedMessage.liked
  //     } else {
  //       return message
  //     };
  //   });
  //   setMessagesData(messages);