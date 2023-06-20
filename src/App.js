import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';




const App = () => {

  const [chatEntries, setchatEntries] = useState(chatMessages);

  let NumberOfLikes = 0;

    for (const entry of chatEntries){
      if (entry.liked){
        NumberOfLikes++
      }
    }


  const updateLikes = (chatId)=> {
    const updatedChatEntries = chatEntries.map(entry =>{
      if (entry.id === chatId){
        return {...entry, liked : !entry.liked};
      } return {...entry};
    })
    setchatEntries(updatedChatEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>GPT Chatting</h1>
        <section>
          <span className= "widget" id= "heartWidget">
          {NumberOfLikes} ❤️s
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries= {chatEntries} updateLikes= {updateLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
