import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);

  const updateLikeData = updatedLike => {
    const newLike = entryData.map(entry => {
      if (entry.id === updatedLike.id) {
        return updatedLike;
      } else {
        return entry;
      }
    });
    setEntryData(newLike);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estrogen</h1>
      </header>
      <main>
        {/* <ChatEntry 
          sender = "Vladimir"
          body = "why are you arguing with me"
          timeStamp = "2018-05-29T22:49:06+00:00"
        /> */}
        {/* <ChatEntry 
          sender = {chatMessages[0].sender}
          body = {chatMessages[0].body}
          timeStamp = {chatMessages[0].timeStamp}
        /> */}
        <ChatLog 
          entries = {entryData} 
          updateLikeData = {updateLikeData}
        />
      </main>
    </div>
  );
};

export default App;