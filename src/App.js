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

  const likeCount = (entryData) => {
    let likeNumber = 0
    for (let entry of entryData) {
      if (entry.liked) {
        likeNumber += 1;
      }
    }; return likeNumber
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        {/* <h2>{likeCount(entryData)} 🖤s</h2> */}
        <section id='LikeCount' >{likeCount(entryData)} 🖤s</section>
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
      <footer>Ana</footer>
    </div>
  );
};

export default App;