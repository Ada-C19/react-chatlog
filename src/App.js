import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [entriesData, setEntriesData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const updateLike = (id) => {
    const updatedEntries = entriesData.map((entry) => {
      if (entry.id === id) {
        entry.liked = !entry.liked; 
        entry.liked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
      }
      
      setEntriesData(updatedEntries);
    });
  };

  // const updateEntriesData = (id) => {
  //   const newEntries = entriesData.map((entry) => {
  //     if (entry.id === id) {
  //       const updatedEntry = { ...entry };
  //       entry.liked = !newEntries.liked;
  //   })
  // }


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main> 
        {/* <ChatEntry
        sender = {chatMessages.sender}
        body = {chatMessages.body}
        timeStamp = {chatMessages.timeStamp}
        /> */}
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
