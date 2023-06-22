import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog'


const App = () => {
  
  // const updateLikeData = updatedLikeEntry => {
  //   const entires = chatMessages.map(entry => {
  //     if (entry.id === updatedLikeEntry.id){
  //       updatedLikeEntry.liked = !updatedLike
  //     } 
  //   })
  // }



  return (
    <div id="App">
      <header id="App-header">
        <h1>Chat between Vladimir and Estragon</h1>
        <div id="App-header-section">
          <h2 className="widget">❤️</h2>
        </div>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {chatMessages.map((message) => (
          <ChatEntry
          key={message.id}
          id = {message.id}
          sender = {message.sender}
          body = {message.body}
          timeStamp = {message.timeStamp}
          liked = {message.liked}
        />
        ))
        }
        <ChatLog entries={chatMessages}></ChatLog>
      
      </main>
    </div>
  );
};

export default App;


