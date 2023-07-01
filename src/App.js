import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [chatData, setChatData] = useState(chatMessages)
    // console.log(chatData)
    // {
    //   'sender':'Vladimir',
    //   'body':'why are you arguing with me',
    //   'timeStamp':'2018-05-29T22:49:06+00:00',
    // }
  
  const updateChatData = updatedChatEntry => {
    const updatedChatEntries = chatData.map(chatEntry => {
      if (chatEntry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chatEntry;
      }
    });
    
    setChatData(updatedChatEntries)
  }

  const likeCounts = () => {
    let likeCount = 0;
    for (let entry of chatData) {
      if (entry.liked === true) {
        likeCount += 1
      }  
    }
    return likeCount
  }; 

  return (
    <div id="App">
      <header>
        <h1>Anh's Chat Log</h1>
        <h2>Total Number of Likes: {likeCounts()} ❤️s</h2>
      </header>
      <main>
        {/* <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}></ChatEntry> */}
        <ChatLog 
        entries={chatData}
        onUpdateChatData={updateChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
