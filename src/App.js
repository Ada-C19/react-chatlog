import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {

  const [chatData, setChatData] = useState(chatMessages);
  let [likeCount, setLikeCount] = useState(0);
  // let likeCount = 0;

  const onLikeClick = (id) => {
  setChatData(chatData.map(chat => {
    if (chat.id === id){
      chat.liked = !chat.liked
      if (chat.liked === true){
        setLikeCount(likeCount += 1)
      };
      if (chat.liked === false){
        setLikeCount(likeCount -= 1)
      };
      
      return chat;
    }
    return chat;
}));
};



  return (
    <div id="App">
      <header>
        <h1>ChatBug</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <div><ChatLog entries={chatData} onClick={onLikeClick}></ChatLog></div>
      </main>
    </div>
  );
};

export default App;
